const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database = require('ronin-database')

// const server = ronin.server()



// server.use('/', mocks.server(server.Router(), false, true))
// server.start();

async function main() {
  try {
    await database.connect(process.env.CONNECTIONSTRING)

    const server = ronin.server({
      port: process.env.SERVER_PORT
    })

    server.use('/', mocks.server(server.Router()))

    const result = await server.start()
    console.log(result)
  } catch(error) {
    console.error(error)
  }
}


main()
