const Discord = require("discord.js")
require("dotenv").config()

const Token = "OTQwMzQ2MjA0OTU5Njk5MDI0.YgGDpg.06YMRtyamITMklP6umIrxTRqsJk"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Connecté sur ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hello World ! ")
    }
})

client.login(process.env.Token)