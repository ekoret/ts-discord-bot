import { CommandInteraction, SlashCommandBuilder } from '../../inc/common'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pong')
        .setDescription('Send ping!'),
    async execute(interaction: typeof CommandInteraction) {

        await interaction.reply('Ping!');
    },
};
