const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema').default
const root = require('./root').default

const loggingMiddleware = (req, res, next) => {
  console.log(`New request made from: ${req.hostname}`);
  next();
}

const app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

const PORT = 4000

app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);