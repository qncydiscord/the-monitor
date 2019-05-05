// Defining Variables and constants.
const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('This bot is a GO!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
        break;
        case 'version':
            message.channel.sendMessage('Version ' + version);
        break;
        case 'clear':
            if(!args[1]) return message.reply('Please define how many messages you want to delete.')
            message.channel.bulkDelete(args[1])
        break;
        case 'avatar':
            message.reply(message.author.avatarURL);
        break;
    }
})

bot.login(process.env.BOT_TOKEN);
