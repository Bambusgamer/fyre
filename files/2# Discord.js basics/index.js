// Discord.js is a module that allows you to interact with the Discord API very easily
// To install it, in vsc click on VIEW (on top) and then click on Terminal
// We will install discord.js globally in this folder so that we can use it in any file here in this folder
// To install it, type "npm install discord.js" and press enter
// Now we can use it in any file in this folder

// Here will be some basic code to get you started with discord.js

// First we need to import the discord.js module
// discord.js is a library that holds functions, objects and classes that allow us to interact with the discord API
// To do that, we will use the require() function
// The require() function is used to import modules
// We will import the discord.js module and store it in a variable called discord
const discord = require('discord.js');

// Now we need to create a new client
// A client is a user account that will be used to interact with the Discord API
// We will create a new client and store it in a variable called client

// Since discords api has opt in api endpoints, we need to pass in client intents to the client constructor
// intents are the way we tell discord what we want to do with the api
// That means: what we want to listen to (creation of a message) and what we want to send (sending a message)
// At first we will be using the basic intents to get started

// These are all the intents discord.js offers:
/**
  Guilds,
  GuildMembers,
  GuildBans,
  GuildEmojisAndStickers,
  GuildIntegrations,
  GuildWebhooks,
  GuildInvites,
  GuildVoiceStates,
  GuildPresences,
  GuildMessages,
  GuildMessageReactions,
  GuildMessageTyping,
  DirectMessages,
  DirectMessageReactions,
  DirectMessageTyping,
  MessageContent,
  GuildScheduledEvents
*/

// We will be using the following intents:
let intents = [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages
];

const client = new discord.Client({ // const because we don't want to assign a new value to it as it would delete the client
    intents: intents // We could also use just intents because the key and the value of the constructor requirements have the same name
});

// Now we need to listen for the ready event
// The ready event is emitted when the client is ready to start interacting with the discord API
// We will use the on() function to listen for the ready event
// The on() function is used to listen for events created by a event emitter
// The client is an event emitter

client.on('ready', () => {
    console.log('The client is ready!');
})

// We will also listen for the messageCreate event
// The messageCreate event is emitted when a message is created

client.on('messageCreate', (message) => { // most events emitted by the client have parameters that get passed in, in this case the message object gets passed in
    // Here we will reply to the message with the content "Hello World!"
    message.reply('Hello World!');
    // You can also use message.channel.send() to send a message to the channel the message was sent in
    message.channel.send('Hello World!');
})

// Now we need to login to the client
// To login to the client we need to pass in the token of the client
// You probably know what that is, here is the link: https://discord.com/developers/applications

let token = 'replace';

client.login(token);

// Now we can run the file by pressing F5 or by using the following command in the terminal:
// node "files/2# Discord.js basics/index.js"

// To test it out send a message in a channel the bot can see and it should reply with "Hello World!" and send "Hello World!" in the channel

// If you want to see a clean version of this file, look at the clean.js file in this folder
