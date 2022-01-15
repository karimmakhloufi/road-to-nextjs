import { gql } from "@apollo/client";
import client from "../graphql/apollo-client";

interface BooksI {
  author: string;
  title: string;
}

const BooksComponent = ({ data: { books } }: { data: { books: BooksI[] } }) => {
  return (
    <div>
      <p>This will be the page</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksComponent;

export async function getServerSideProps() {
  console.log("server side");
  const { data } = await client.query({
    query: gql`
      {
        books {
          author
        }
      }
    `,
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
