const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['details', 'what'],
			guarded: true,
			description: 'Information about Omni',
		});
	}

	async run(message) {

		const x = new MessageEmbed()
			.setColor('#f4428c')
			.setDescription(`__**π About γ${this.client.user.username}γ**__\n\n**γ${this.client.user.username}γ is a multipurpose bot focused on all aspects of your server.\nγ${this.client.user.username}γis a bot which makes your work easier by its special features which includes Moderation, Music, Gaming Stats and much more.\n\n**__**π¨ Support γ${this.client.user.username}γ**__\n\n**π If you find out any bug, report it using bug command. Usage: +bug <Bug>\n\nπ If you have any idea or suggestion for γ${this.client.user.username}γ use the idea command. Usage: +idea <suggestion/idea>**`);
		return message.send(x);
	}
};
