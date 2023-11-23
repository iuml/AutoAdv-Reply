const { Client } = require('discord.js-selfbot-v13');
const { token , channelid, reply, waittime,  initialmsg } = require("./config.json")
const client = new Client({
	checkUpdate: false,
});
console.clear()
client.on('ready', async () => {
  let chnl = client.channels.cache.get(channelid);
  console.log(`[>] Begginning auto messaging as ${client.user.username}.`);

  setInterval(() => {
    chnl.send(initialmsg).then(console.log('Sent.')).catch(err => (console.error(err)))
  }, waittime);
})
client.on('messageCreate', async message => {
	if(message.guild==null &&message.author.id!==client.user.id){
    await message.reply(reply)
   }
   
  
});
client.login(token);
