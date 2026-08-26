require('dotenv').config({ quiet: true });

const config = {
    PORT: process.env.PORT || 8000,
    CUSTOMERS_URL: process.env.CUSTOMERS_URL || "http://customers:8001",
    PRODUCTS_URL: process.env.PRODUCTS_URL || "http://products:8002",
    SHOPPING_URL: process.env.SHOPPING_URL || "http://shopping:8003"
};

config.requireVars = (...names) => {
    const missing = names.filter(name => !config[name]);

    if (missing.length > 0) {
        console.error(`Missing required environment variables: ${missing.join(', ')}`);
        process.exit(1);
    }
};

module.exports = config;