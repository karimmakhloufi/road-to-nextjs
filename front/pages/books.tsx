import { useRef } from "react";
import { gql } from "@apollo/client";
import client from "../graphql/apollo-client";

interface BooksI {
  author: string;
  title: string;
}

const BooksComponent = ({ data: { books } }: { data: { books: BooksI[] } }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  return (
    <div>
      <p>This will be the page</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.author}</li>
        ))}
      </ul>
      <input ref={inputEl} type="text" />
      <button
        onClick={async () => {
          console.log(inputEl.current?.value);
          try {
            await client.mutate({
              mutation: gql`
                mutation ($author: String) {
                  addBook(author: $author)
                }
              `,
              variables: { author: inputEl.current?.value },
            });
          } catch (e) {
            console.log("error", e);
          }
        }}
      >
        Add Book
      </button>
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
