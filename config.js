//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256765050916";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VvQW5MQ3l0MHhOWm1JZUJISHk3QWQvRkw5VjNnbHYrWmUvWkFyN01Wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajM4YkQyeGFmNytlVWhKbUs3U3ZrbE55RWxqNUlXZ25LNmhSaHFZdEZoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRTk2b0tMdzdZTXdTWmZFM1J0RzhIbWNIWXZRa2xFaWg3SXBLa3luaVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJac283TXQvVFAxS2pnU0F1bG05V2dvbjBFTGdNcS8zc2MxZjV2YTc5OEYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9POGlRMGZIRjFzcHBOSUNqc010M3BTN1VTMFIyb3dMSlo0WTZJcUx0SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9mai9Pc2thVVRaTWJiclpHWmtIWWo4N01JOFpsRmplR2JwbEtLRjZHanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZKMnpXYTVhdDRUSDNrZE0vblJ2NGVsUWJpM2FvQTI5WjUwVkJoMmtGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0tZYWJyTjBpUHhWbUtRN2w3WTMvOUV4YWhmVmorVktKZ2pWZFNkVkp4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRPMjRmS2JoUFY4UmdGTDgzUGdqV3YvUmxKVit4ejBBaVhJRUdHM0tlbU9iZGFUYjh3amxpb2dJNU40cXd4WDdKSjRnUzhDaEU2ZDVmL21VUWllY0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IlFSc1JRdW00eUczR05KNlVpU3lKQWVNc2NpRzVJMTJuNTUzbjBhcWhQY1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU2NzY1MDUwOTE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCQUNENUVENTRCN0M4RDFFQ0FBNEJCRjFDQjJEQzdDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE2OTkzMDh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkN2YzRsSFJFVFllbHNwam9YRWxIQWciLCJwaG9uZUlkIjoiMDEwYmI2MzktMGQyNC00MjdlLWE5ZDAtNDhjOTIyODM1YWRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9qS21nWGp0NjhMaXJJT0N0ZWRUWWFhR2U5Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVnJHSHpsYUdwRXJvaTBqQnBQN01Qa1hpOVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkVHM1JFUzgiLCJtZSI6eyJpZCI6IjI1Njc2NTA1MDkxNjozN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmlEak80R0VObkUzcmtHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYkF2Q2g4b0h2MUgrTlMzVjgrZ0JsZ1pidjdPQ3RQdW4yRUMvRTRHRVN6QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibEl4STg2S1BCTE10c3ZxUXhjcE5acXVvWG9pMWRIRmVod3NoNTdGSTdjTnF3QWhOdHZaWCsxVWU3Zis5ZU1GdEw1V0JLRUtZTk93TnJuZ25xWm1nQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjF3dlVySS82M0hRS3o4dmhxa1hUcWlYUCtjSU5nT29rOGxUemRhdnpnN1A3NlVEdWN6RWptZTUzUXJMd0NnVGJJaDNjMkZEWTF3QmUra2hGZ2tpekNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzY1MDUwOTE2OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld3THdvZktCNzlSL2pVdDFmUG9BWllHVzcremdyVDdwOWhBdnhPQmhFc3cifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE2OTkzMDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0I0In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "FRANK PRO UG BOT",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "FIRE.WALL.BOT",
  ownername: process.env.OWNER_NAME || "FRANK PRO",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
