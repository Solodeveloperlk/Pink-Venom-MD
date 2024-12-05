
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'PINKVENOM-MD;OJ9XTTyZ#2k_7TWFkQDshqDF7VbXWTobIJEIuc0QpNI-cAo0yuvg' : process.env.SESSION_ID, //ADD YOUR SESSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Solodeveloperlk' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'gHSjwIZrMzzO8Wz07vAdaLhxvBPGQr4BU2Fy' : process.env.GITHUB_AUTH_TOKEN, //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
    WORK_TYPE: process.env.WORK_TYPE === undefined ? 'PUBLIC' : process.env.WORK_TYPE, //ONLYME / ONLYGROUP OR PUBLIC
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ? 'FALSE' : process.env.AUTO_READ_STATUS, //TRUE OR FALSE
    PRESENCE: process.env.PRESENCE === undefined ? `available` : process.env.PRESENCE, //AVAILABLE, COMPOSING, RECORDING OR UNAVAILABLE
    ALIVE: process.env.ALIVE === undefined ? `default` : process.env.ALIVE, //YOUR ALIVE MESSAGE OR SET IT TO defeault
    OWNER: process.env.OWNER === undefined ? `94729787750` : process.env.OWNER, //BOTS OWNER NUMBER
    PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX, //BOTS PREFIX 
    MAX_SIZE: process.env.MAX_SIZE === undefined ? '200' : process.env.MAX_SIZE, //MAX UPLOAD SIZE
    LOGO: process.env.LOGO === undefined ? `https://i.postimg.cc/JzHb8pfV/IMG-20241124-WA0139.jpg` : process.env.LOGO, //ALIVE IMAGE URL
    ANTI_LINK: process.env.ANTI_LINK === undefined ? 'FALSE' : process.env.ANTI_LINK, //TRUE OR FALSE
    ANTI_BAD: process.env.ANTI_BAD === undefined ? 'FALSE' : process.env.ANTI_BAD, //TRUE OR FALSE
    ANTI_BOT: process.env.ANTI_BOT === undefined ? 'FALSE' : process.env.ANTI_BOT, //TRUE OR FALSE
    READ_MESSAGE: process.env.READ_MESSAGE === undefined ? 'FALSE' : process.env.READ_MESSAGE, //SET cmd FOR ONLY READ COMMANDS OR SET all FOR READ ALL MESSAGES
    ANTI_CALL: process.env.ANTI_CALL === undefined ? 'false' : process.env.ANTI_CALL, //TRUE OR FALSE
    AUTO_BLOCK: process.env.AUTO_BLOCK === undefined ? 'false' : process.env.AUTO_BLOCK //SET cmd FOR ONLY BLOCK INBOX COMMANDS USED USERS OR SET all FOR BLOCK ALL IINBOX USERS
};
