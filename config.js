const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IClEVTxa#rXEKWLfEh7yX2kFTdJj47LaI6vj5bkFoOd4R6v0jsB8",
MONGODB: process.env.MONGODB || "mongodb+srv://anasmodz:733670872@cluster0.2k7nnnm.mongodb.net/?retryWrites=true&w=majority",
};
