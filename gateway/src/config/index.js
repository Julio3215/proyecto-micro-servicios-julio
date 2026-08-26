require('dotenv').config({ quiet: true });

const config = {
    PORT: process.env.PORT || 8000,
    CUSTOMER_URL: process.env.CUSTOMER_URL,
    PRODUCT_URL: process.env.PRODUCT_URL,
    SHOPPING_URL: process.env.SHOPPING_URL
}

config.requireVars = (...names) => {
    const missing = names.filter(name => !config[name]);

    if(missing.length > 0) {
        console.error(`Missing required environment variables: ${missing.join(', ')}`);
        process.exit(1);
    }
}

module.exports = config;
