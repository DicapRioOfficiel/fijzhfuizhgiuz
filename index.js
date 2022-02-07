const Discord = require("discord.js")
require("dotenv").config()

const Token = "OTQwMzQ2MjA0OTU5Njk5MDI0.YgGDpg.K5pN7kolU1dtSD0AnFC9SLjok1U"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Connecté sur ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Salut l'ami ! ")
    }
})

const welcomeChannelId = "940360782657519657"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id} Bienvenu sur le serveur`)
})

client.login(process.env.Token)