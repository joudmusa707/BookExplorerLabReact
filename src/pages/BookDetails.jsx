import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((res) => {
        setBook(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading book details...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>
        {typeof book.description === "string"
          ? book.description
          : book.description?.value || "No description available"}
      </p>
      {book.covers && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
        />
      )}
    </div>
  );
};
export default BookDetails;
