// Defining Variables and constants.
const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var information = '1.0.5';

bot.on('ready', () =>{
    console.log('This bot is a GO!');
    bot.user.setActivity('nothing at all', {type: 'WATCHING'}).catch;(console.error);
})

bot.on('guildMemberAdd', member =>{
    
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;
    
    channel.send(`Welcome to Quincy's Discord, ${member}`)
    
});    

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!');
        break;
        case 'information':
            message.channel.sendMessage('Made by Quincy#4663, Version ' + information);
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
