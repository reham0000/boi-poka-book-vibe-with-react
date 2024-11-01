import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className=''>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <p className="py-6">
          
          </p>
          <button className="btn bg-lime-600">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
