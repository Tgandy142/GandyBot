const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

      module.exports = {
      	data: new SlashCommandBuilder()
      		.setName('echo')
      		.setDescription('Replies with your input!')
          .addStringOption(option =>
        		option.setName('input')
        			.setDescription('The input to echo back')),
      	async execute(interaction) {
          const input = interaction.options.getString("input")
          fs.writeFile('Output.txt', input, (err) => {

        if (err) throw err;
        })
      		await interaction.reply(input);
      	},
      };
