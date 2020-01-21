module.exports = (client) => {
  const app = client.app;
  app.listen(process.env.PORT, () => console.log(`Listening on the port ${process.env.PORT}...`))
}