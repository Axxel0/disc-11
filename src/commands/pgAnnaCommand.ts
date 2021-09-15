import { isUserInTheVoiceChannel, isMusicQueueExists, isSameVoiceChannel } from "../utils/decorators/MusicHelper";
import { DefineCommand } from "../utils/decorators/DefineCommand";
import { BaseCommand } from "../structures/BaseCommand";
import { createEmbed } from "../utils/createEmbed";
import { Message } from "discord.js";

@DefineCommand({
    aliases: ["pgAnna"],
    description: "Print in general",
    name: "Print",
    usage: "{prefix}pgAnna [message]"
})
export class pgAnnaCommand extends BaseCommand {
    //@isUserInTheVoiceChannel()
    //@isMusicQueueExists()
    //@isSameVoiceChannel()
    public execute(message: Message, args: string[]): any {
       // let volume = Number(args[0]);
        
        message.delete()
        const general = bot.channels.cache.find(channel => channel.id === "851574996480426007");
        general.send(message.content.slice(4, message.content.length));

        //message.guild!.queue!.volume = Number(args[0]);
        //message.guild!.queue!.connection?.dispatcher.setVolume(Number(args[0]) / this.client.config.maxVolume);
        //message.channel.send(createEmbed("info", `🔊 **|** Volume set to **\`${args[0]}\`**`)).catch(console.error);
    }
}    

