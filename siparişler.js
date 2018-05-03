const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Siparişini yazmalısn.');
    const embed = new Discord.RichEmbed()
    .setDescription(`${message.author.username} Siparişin şeflere iletildi yemeğin şefler aktif olduğunda gönderilecek!`)
    .setImage(`${message.author.avatarURL}`)
    .setColor("RANDOM")
    client.channels.get("441630622155407381").sendMessage(`@here\n\n-------------\n\nSiparişi veren\n${message.author.username}\nSiparişin verildiği kanal\n${message.channel.username}\n\nSiparişi:\n${mesaj}\n-------------`)
    return message.channel.sendEmbed(embed);

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sipariş',
    description: 'Siparişinizi yazarsınız',
    usage: 'sipariş'
  };