const { GraphQLServer } = require('graphql-yoga');

const resolvers = {
  Query: {
    currentUser() {
      return { id: '1', email: 'kees@webduck.nl', emailConfirmed: true };
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
});
server.start(() => console.log('Server is running on http://localhost:4000'));
