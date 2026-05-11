import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=programming")
      .then((res) => {
        setBooks(res.data.docs);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading books...</p>;
  return (
    <div className="row">
      {books.map((book) => {
        const id = book.key.split("/").pop();
        return (
          <Card style={{ width: "18rem" }} key={book.key} className="mb-4">
            <Card.Img
              variant="top"
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            />
            <Card.Body>
              <Link to={`/books/${id}`} className="text-decoration-none">
                <Card.Title>{book.title}</Card.Title>
              </Link>
              <Card.Text>
                <strong>Author:</strong> {book.author_name}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default Books;
