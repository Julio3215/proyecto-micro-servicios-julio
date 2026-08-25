require('dotenv').config(); const express=require('express'); const cors=require('cors'); const mongoose=require('mongoose'); const jwt=require('jsonwebtoken');
const app=express(), PORT=process.env.PORT||8003, DB_URL=process.env.DB_URL, SECRET=process.env.APP_SECRET||'microservices_secret_change_me';
const Order=mongoose.model('Order',new mongoose.Schema({customerId:{type:String,required:true},txnId:String,amount:Number,status:{type:String,default:'received'},items:[{product:mongoose.Schema.Types.Mixed,unit:Number}]},{timestamps:true}));
app.use(cors()); app.use(express.json());
function auth(req,res,next){const h=req.headers.authorization;if(!h?.startsWith('Bearer '))return res.status(401).json({message:'Missing authorization token'});try{req.user=jwt.verify(h.split(' ')[1],SECRET);next()}catch(e){res.status(401).json({message:'Invalid or expired token'})}}
app.get('/',(req,res)=>res.json({servicio:'shopping',mensaje:'Microservicio de compras funcionando'}));
app.post('/order',auth,async(req,res,next)=>{try{const {txnId,amount,items=[]}=req.body;const order=await Order.create({customerId:req.user._id,txnId,amount,items});res.status(201).json(order)}catch(e){next(e)}});
app.get('/orders',auth,async(req,res,next)=>{try{res.json(await Order.find({customerId:req.user._id}))}catch(e){next(e)}});
app.use((e,req,res,next)=>res.status(500).json({message:e.message}));
(async()=>{try{await mongoose.connect(DB_URL);console.log('Shopping DB connected');app.listen(PORT,'0.0.0.0',()=>console.log(`Shopping listening on ${PORT}`))}catch(e){console.error(e);process.exit(1)}})();
