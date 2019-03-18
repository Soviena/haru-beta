const { RichEmbed } = require('discord.js')

/**
 * A RichEmbed with the default fields already filled
 * @constructor
 * @param {User} [user] - The user that executed the command that resulted in this embed
 * @param {object} [data] - Data to set in the rich embed
 */
module.exports = class vembed extends RichEmbed {
  constructor (user, data = {}) {
    super(data)
    if (user) this.setFooter(user.tag)
  }
}
