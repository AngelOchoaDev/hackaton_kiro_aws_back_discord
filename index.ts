import {
  Client,
  Events,
  GatewayIntentBits,
  AllowedMentionsTypes,
  ActivityType,
  Partials
} from "discord.js";

import { config } from "./config";

const client = new Client({
  allowedMentions : {
    parse: [
      AllowedMentionsTypes.User,
      AllowedMentionsTypes.Role,
      AllowedMentionsTypes.Everyone
    ],
    repliedUser: true
  },
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildIntegrations,
  ],
  partials: [ Partials.Channel ]
});

client.once(Events.ClientReady, ( event : Client<boolean> ) => {

  client.user?.setActivity("gente maravillosa", { type: ActivityType.Watching } );

  console.log(`Listo! Loggeado como ${ event.user?.tag } en ambiente ${ config.enviroment }`);

});

client.login(config.token);