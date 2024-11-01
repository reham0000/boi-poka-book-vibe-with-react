import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, image, review, name } = book;

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-3xl text-center">Book Details: {bookId}</h1>
      <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto">
        <figure>
          <img
          className="w-96 h-96 p-5 "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-title"> {name}</h2>
          <p>{review}</p>
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
