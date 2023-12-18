import { CommandInteraction, SlashCommandBuilder } from '../../inc/common'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Send pong!'),
	async execute(interaction: typeof CommandInteraction) {

		await interaction.reply('Pong!');
	},
};
