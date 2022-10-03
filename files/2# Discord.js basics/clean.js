const discord = require('discord.js');

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMessages
    ]
});

client.on('ready', () => {
    console.log('The client is ready!');
});

client.on('messageCreate', (message) => {
    message.reply('Hello World!');
    message.channel.send('Hello World!');
});

client.login('replace');