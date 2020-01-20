// Defining Variables and constants.
const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var information = '1.1';
//functions

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

    switch (args[0]) {
        case 'ping':
            message.channel.sendMessage('pong!');
            break;
        case 'information':
            message.channel.sendMessage('Made by Quincy#4663, Version ' + information);
            break;
        case 'clear':
            if (!args[1]) return message.reply('Please define how many messages you want to delete.')
            message.channel.bulkDelete(args[1])
            break;
        case 'avatar':
            message.reply(message.author.avatarURL);
            break;
        case 'poll':
            const Embed = new RichEmbed()
                .setColor(0xFF0000)
                .setTitle('Initiate Poll')
                .setDescription('!poll Choice 1 Choice 2 (Leave a space in the middle.) Yes or No poll only.')
            if (!args[1]) {
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send('🗒️' + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react('👍');
                messageReaction.react('👎');
                message.delete(1000).catch(console.error);
            });
        break;
        case 'help':
            message.author.sendMessage('Prefix is: "!", following commands are currently avaliable for use: information, help, poll, ping.')
        break;
        case 'changelog':
            message.channel.sendMessage('Poll added, few things fixed serverside.')
        break;

    }
})

bot.login(process.env.BOT_TOKEN);
