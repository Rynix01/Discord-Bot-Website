module.exports = {
  bot: {
    name: "Your Bot's Name",
    briefing:
      "Give a brief but compelling description of your bot here. Explain its functionality, how it benefits users, and why it stands out from other bots. This section will capture users' attention and make them want to learn more about your bot.",
    about:
      "Our Discord bot offers a wide range of features to enhance your server experience. Join our community and discover what we can offer!",
    features: [
      {
        title: "Moderation Commands",
        description:
          "Manage your server effortlessly with moderation commands that allow you to control members, set rules, and maintain a positive environment.",
      },
      {
        title: "Music Commands",
        description:
          "Enjoy seamless music playback with commands that allow users to play, pause, and skip tracks directly from Discord.",
      },
      {
        title: "Games Commands",
        description:
          "Engage your community with fun games and interactive commands that keep everyone entertained.",
      },
      {
        title: "Utility Commands",
        description:
          "Access useful commands for tasks such as reminders, polls, and more to enhance your server's functionality.",
      },
      {
        title: "Fun Commands",
        description:
          "Bring fun and laughter to your server with commands that generate memes, jokes, and more.",
      },
      {
        title: "Info Commands",
        description:
          "Provide users with information about your server, commands, and other useful resources through informative commands.",
      },
    ],
  },
  links: {
    icon: "https://rynixapi.online/favicon.ico",
    github: "https://github.com/your-github-username/your-bot-repo",
    invite:
      "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=8",
    support: "https://discord.gg/your-discord-server",
    twitter: "https://twitter.com/your-twitter-handle",
  },
  commands: [
    {
      command: "ping",
      description: "Check the bot's latency and response time.",
      aliases: ["ping"],
    },
    {
      command: "help",
      description: "Display a list of all available commands.",
      aliases: ["commands"],
    },
    {
      command: "info",
      description: "Get information about the bot and its features.",
      aliases: ["about"],
    },
    {
      command: "serverinfo",
      description: "Display information about the current server.",
      aliases: ["server"],
    },
    {
      command: "userinfo",
      description: "Get information about a specific user.",
      aliases: ["user"],
    },
    {
      command: "kick",
      description: "Kick a member from the server.",
      aliases: ["remove"],
    },
  ],
};
