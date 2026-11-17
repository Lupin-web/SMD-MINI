// HELLO FROM LUPIN... THIS IS LUPIN-BOT BOT CREATED BY ME deploy From Here https://lupin-bot.lupin.site
const smd = require("team-bandaheali");
const config = require("../config");

// Default language ("en" = English, "sw" = Swahili, "sh" = Sheng)
let currentLang = "en";

const messages = {
  en: {
    langSet: "✅ Language switched to *English*.",
    greeting: `👋 Hello! *${config.BOT_NAME}* is online and ready.\nType *.lang sw* for Swahili or *.lang sh* for Sheng.`,
    ping: "⚡ *Pong!* Lupin-Bot is active and running smoothly.",
    owner: `👑 *Bot Owner:* ${config.OWNER_NAME}\n📞 *Contact:* wa.me/${config.OWNER_NUMBER}`,
    help: `*${config.BOT_NAME} — Custom Commands*\n\n• *.lang en / sw / sh* — Switch language\n• *.habari* — Bot status & greeting\n• *.ping* — Check response speed\n• *.owner* — Owner contact info`,
    invalidLang: "⚠️ Choose a valid language: *.lang en* (English), *.lang sw* (Swahili), or *.lang sh* (Sheng).",
  },
  sw: {
    langSet: "✅ Lugha imebadilishwa kuwa *Kiswahili*.",
    greeting: `👋 Habari! *${config.BOT_NAME}* iko hewani na tayari kukuhudumia.\nAndika *.lang en* kwa Kiingereza au *.lang sh* kwa Sheng.`,
    ping: "⚡ *Kasi!* Lupin-Bot iko macho na inafanya kazi vizuri.",
    owner: `👑 *Mmiliki wa Bot:* ${config.OWNER_NAME}\n📞 *Mawasiliano:* wa.me/${config.OWNER_NUMBER}`,
    help: `*${config.BOT_NAME} — Amri Maalum*\n\n• *.lang en / sw / sh* — Badilisha lugha\n• *.habari* — Salamu na hali ya bot\n• *.ping* — Angalia kasi ya bot\n• *.owner* — Mawasiliano ya mmiliki`,
    invalidLang: "⚠️ Chagua lugha sahihi: *.lang en* (Kiingereza), *.lang sw* (Kiswahili), au *.lang sh* (Sheng).",
  },
  sh: {
    langSet: "✅ Rada imeset! Lugha sasa ni *Sheng*.",
    greeting: `👋 Niaje! *${config.BOT_NAME}* iko rada na iko seti.\nChapa *.lang en* ya Kizungu ama *.lang sw* ya Kiswahili.`,
    ping: "⚡ *Sawa sawa!* Lupin-Bot iko mbio mbaya.",
    owner: `👑 *Mkubwa wa Bot:* ${config.OWNER_NAME}\n📞 *Bonga naye:* wa.me/${config.OWNER_NUMBER}`,
    help: `*${config.BOT_NAME} — Ma-Commands*\n\n• *.lang en / sw / sh* — Change lugha\n• *.habari* — Cheki kama bot iko rada\n• *.ping* — Pima speed ya bot\n• *.owner* — Namba ya mdosi`,
    invalidLang: "⚠️ Chagua lugha fiti: *.lang en* (English), *.lang sw* (Swahili), ama *.lang sh* (Sheng).",
  },
};

// 1. Switch Language Command (.lang en | sw | sh)
smd(
  {
    pattern: "lang",
    desc: "Switch bot language between English, Swahili, and Sheng",
    category: "general",
    filename: __filename,
  },
  async (message, match) => {
    const choice = (match || "").trim().toLowerCase();
    if (choice === "en" || choice === "sw" || choice === "sh") {
      currentLang = choice;
      return await message.reply(messages[currentLang].langSet);
    }
    return await message.reply(messages[currentLang].invalidLang);
  }
);

// 2. Greeting Command (.habari / .niaje)
smd(
  {
    pattern: "habari",
    alias: ["niaje", "hello"],
    desc: "Greet the bot in the active language",
    category: "general",
    filename: __filename,
  },
  async (message) => {
    await message.reply(messages[currentLang].greeting);
  }
);

// 3. Speed Check Command (.ping)
smd(
  {
    pattern: "ping",
    desc: "Check bot response status",
    category: "general",
    filename: __filename,
  },
  async (message) => {
    await message.reply(messages[currentLang].ping);
  }
);

// 4. Owner Command (.owner / .mdosi)
smd(
  {
    pattern: "owner",
    alias: ["mdosi", "mmiliki"],
    desc: "Show owner details",
    category: "general",
    filename: __filename,
  },
  async (message) => {
    await message.reply(messages[currentLang].owner);
  }
);

// 5. Custom Help Menu (.lupin)
smd(
  {
    pattern: "lupin",
    desc: "Show custom trilingual commands",
    category: "general",
    filename: __filename,
  },
  async (message) => {
    await message.reply(messages[currentLang].help);
  }
);
