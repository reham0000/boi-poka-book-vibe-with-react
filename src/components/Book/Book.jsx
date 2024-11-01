import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, bookId} = book;

  return (
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl p-6 mx-auto">
      <figure className="bg-blue-200 py-8 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-4 ">
          {tags.map((tag, idx) => 
            <button key={idx} className="btn btn-xs bg-green-200 text-green-600">
              {tag}
            </button>
          )}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed mt-3"></div>
        <div className="card-actions justify-between mt-3">
          <div className="badge badge-outline">{category}</div>
          
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
