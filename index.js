const fetch = require("node-fetch");

class Discord {
  constructor(discordToken, channelID, defaultMsg) {
    if (!discordToken || !channelID) {
      throw new Error("Discord config missing");
    }
    this.channelID = channelID;
    this.discordToken = discordToken;
    this.defaultMsg = defaultMsg;
  }

  postMessage(msg) {
    try {
      fetch(
        `https://discordapp.com/api/webhooks/${this.channelID}/${
          this.discordToken
        }`,
        {
          body: JSON.stringify({
            ...this.defaultMsg,
            ...msg
          }),
          headers: { "Content-Type": "application/json" },
          method: "POST"
        }
      ).then((res) => console.log("Done!", res));
    } catch (err) {
      console.error("Error posting webhook to discord :/", err);
    }
  }
}

exports.hose = (event, context) => {
  const discord = new Discord(
    process.env.DISCORD_TOKEN,
    process.env.DISCORD_CHANNEL,
    {
      username: "SNS Firehose",
      avatar_url: "https://mosey.systems/firehose.jpg"
    }
  );
  discord.postMessage({ content: JSON.stringify(event, null, 2) });
};
