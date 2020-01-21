module.exports = (client, dir) => {
  require("fs").readdir(dir + "/events", (error, files) => {
    if (error) return console.error(error);
    files
      .filter(f => f.endsWith(".js"))
      .forEach(file => {
        let event = require(dir + "/events/" + file);
        client.on(file.split(".")[0], (...args) => event(client, ...args));
      });
  });
};