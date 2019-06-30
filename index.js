const express = require('express')
const express_graphql = require('express-graphql')
const { buildSchema } = require('graphql')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`)

// Root resolver
const root = {
  message: () => 'Hello World!'
}

const app = express()

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true // ui-client
}))

app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'))
