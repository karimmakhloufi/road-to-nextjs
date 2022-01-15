import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    typeof window === "undefined"
      ? "http://back:4000"
      : "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
