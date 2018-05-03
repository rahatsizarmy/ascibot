module.exports = member => {
  let username = member.user.username;
  member.send('Hoş geldin **' + username + '**!');
  client.channels.get("429350148745723914").sendMessage(`${username} adlı kişi sunucuya katıldı.Sunucu sayısı ${message.guild.memberCount} oldu.`);
};
