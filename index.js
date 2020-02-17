const Discord = require('discord.js')
const client = new Discord.Client()
var opus = require('opusscript');
let request = require(`request`);
let fs = require(`fs`);
function download(url){
    request.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream('music.mp3'));
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })

client.on('message', msg => {
  if (msg.content === '%test') {
    msg.reply('Olivier !!!!!!!!!!')
  }
})

client.on('message', msg => {
  if (msg.content === '%join') {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          msg.reply('Connexion reussite');
        })
        .catch(console.log);
    } else {
      msg.reply('PTDR T PA SUR UN CHANNEL VOCAL');
    };
  }
});

client.on('message', msg => {
    if (msg.content === '%play') {
          msg.member.voiceChannel.join().then(connection => {
          const dispatcher = connection.playFile('music.mp3')
          dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
      }
    })

    client.on('message', msg => {
      if (msg.content === '%dejoin') {
        if (msg.member.voiceChannel) {
          msg.member.voiceChannel.leave()
        } else {
          msg.reply('You need to join a voice channel first!');
        };
      }
    });

    client.on('message', msg => {
      if(msg.attachments.first()){//checks if an attachment is sent
        console.log("ptn in la dans le cul")  
        if(msg.attachments.first().filename === `music.mp3`){//Download only png (customize this)
          console.log("ptn in la dans le cul")  
              download(msg.attachments.first().url);//Function I will show later
          }
      }
  });

client.login(Njc4NTk4NDU5NDkzODQyOTU1.Xkpj3A._ykLqbSgmOXUksD-IZzdee8K0FA)