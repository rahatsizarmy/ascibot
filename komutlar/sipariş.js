const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setDescription(`${message.author.username} Adlı şefin yemeği!`)
    .setImage(`${mesaj}`)
    .setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['siparişc'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'siparişc',
    description: 'adı yazılan kişiyi uyarır',
    usage: 'siparişc'
  };