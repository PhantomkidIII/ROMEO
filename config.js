//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "26776660902";
global.owner = process.env.OWNER_NUMBER || "26776660902";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhLT3Vva2FJMXZIN204amxtd0w4TzltMlpPVEEwZG5hZEwzNXgyUEJYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RFRHUwTlBTdTU4RmJpL2lnb2JTZ0pEYzh2V3FhSkl1cXIwS1d2TDV4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT0txTUJrY3hxNUNsc2t4VEdqKzVmQjNDVTRtem5oYmpITHhMdFk2SUVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZks5VTlMb2tINjJwM2NjTzRmY1AyWXlwVkcvdk1rWVhTdDN0NmxoOVc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFITHEvazZWMVRRdVdnQnNLL3V5VjlHUng3TTFTVE0xQVh6ZVl4YmU4SDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im96S0FYdEpBaldIald4c2U3YWFSNGNkRFRjWE1ZeU9TVzY3YURCNG5CVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0QvN2xVMUljWWRPdytUZ21KNFVKRzdyTFVRYmRPNHFnTTBXNkt5S1cxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlh1RTdqODNoSWJhYm9DbUpLQVIybk4xTFUyY0hibTBtMHFzK1FsTWVtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJZQXVvRUE1NzlvRGNwWnF1SE9wbUZVakRkT2V0dGJDRnk0b3QzZE4zYXZPRFBVTlV6Tk9SMjBSa1ErQ2pWZVhpczc5Vm9aNm54allqQXkxdy9PbWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IlpTM2s3YVJRd1U4RGdCSkdEbUJ3b255YXlvK0RpbE02RGRsQjM3ZklIRXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imt1Z2hQdXFqUjRtbUw4Wm1KRE4xSXciLCJwaG9uZUlkIjoiOTAzNjI0ZGMtZDcwNi00MTE4LWIzZjctYWI5ZjM3YmEwZjA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHVEthTXlrZnZoN25KVDJESnJRaGdvbE5jYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2bm16YVFLODQ1Wno5STdiZHlzQU0vaEdEaU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkFMR0dMQ1MiLCJtZSI6eyJpZCI6IjI2Nzc2NjYwOTAyOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RufCdkbbwnZG08J2RrPCdkbYg8J2RqfCdkb4g8J2RsPCdkbDwnZGwW/CdkbnwnZGrXSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUtYamhrUWlkNjl0Z1lZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWVFLL1BkVm1wQ080dW95VEtWUVRaemg1aFI1OGkyQmQ0ZHlSV28xcjlDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQW1YaUpWaGZncHNaNVBSNUFsQmM5ZWNNMVV5TDZWRElneXZBanoxMzVvVTVsbnVMUnl2U2dpRDI5TW1JekxDU2VSMEZyNHl3cUNEaHlYQlhqRmhiQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjBFbjcvdFRoSm1wMk8ybDdpM3A1ZFhrS2xlYlo5dXZGaVJPOE5ZUWFpdStWZkpCUFJYVGtjd3Vtc3d5a1dianAwNnhDUGxWNHNnbVJJUWRHV0ZlWmdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjY3NzY2NjA5MDI6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXRUN2ejNWWnFRanVMcU1reWxVRTJjNGVZVWVmSXRnWGVIY2tWcU5hL1FsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0ODcwNDIzfQ=="
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
