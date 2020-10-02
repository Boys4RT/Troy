client.on('ready', () =>{
	console.log('This Bot is Online!');
	client.user.setActivity('Nge Dota Santuy Sambil Jaga Server');

})	

client.on('message', message => {
	if (message.content === 'Valorant kuy') {
		message.channel.send('Yhahaha Hayukkk <@&739504569200935002>');
	}
});
client.on('message', message => {
	if (message.content === 'Dota kuy') {
		message.channel.send('Yhahaha Hayukkk <@&751346827718033459>');
	}
});
client.on('message', message => {
	if (message.content === 'Underlord kuy') {
		message.channel.send('Yhahaha Hayuk Para Badut <@620280799777783808> <@307481267308462080> <@715901123822878869>');
	}
