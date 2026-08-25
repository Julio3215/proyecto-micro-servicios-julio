require('dotenv').config(); const mongoose=require('mongoose');
const Product=mongoose.model('Product',new mongoose.Schema({name:String,desc:String,type:String,banner:String,price:Number,available:Boolean}));
const data=[['Sedan Clásico','sedan',18000],['SUV Familiar','suv',32000],['Pickup 4x4','truck',35000],['Hatchback Urbano','hatchback',15000],['Convertible Sport','sport',45000]].map(([name,type,price])=>({name,type,price,desc:`${name} disponible`,available:true}));
(async()=>{await mongoose.connect(process.env.DB_URL);for(const p of data)await Product.updateOne({name:p.name},{$setOnInsert:p},{upsert:true});console.log('Productos sembrados');await mongoose.disconnect()})().catch(e=>{console.error(e);process.exit(1)});
