module.exports = {
  defaultBrowser: "Microsoft Edge",
  options: {
    // Hide the finicky icon from the top bar. Default: false
    hideIcon: false, 
    // Check for update on startup. Default: true
    checkForUpdate: true,
    // Change the internal list of url shortener services. Default: undefined
    // urlShorteners: (list) => [...list, "custom.urlshortener.com"],
    // Log every request with basic information to console. Default: false
    logRequests: false
  },
handlers: [
    {
      match: "open.spotify.com/*",
      browser: "Spotify"
    },
    {
      match: ({ url }) => url.host === "localhost",
      browser: "Google Chrome",
      args: ["--incognito"],
    },
    {
        match: [
          "zoom.us/*",
          finicky.matchDomains(/.*\zoom.us/),
          /zoom.us\/j\//,
        ],
        browser: "us.zoom.xos"
    },
],
};
