import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log("apollo client");

const client = new ApolloClient({
  uri: "http://back:4000",
  cache: new InMemoryCache(),
});

export default client;
