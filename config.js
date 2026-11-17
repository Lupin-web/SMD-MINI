const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "254756051276",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "Lupin-Bot",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "LUPIN",

    CAPTION:
        process.env.CAPTION ||
        "CALL ME LUPIN",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "JUST LUPIN",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363175375282051@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://imgur.com/a/Pf7P4RE.jpg",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://mr-shaban.vercel.app",

    PORT:
        process.env.PORT ||
        "21604"
};
