import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="overlay"></div>
      <div className="content text-center">
        <h1 className="display-4">The Future of Healthcare</h1>
        <p className="lead">Bring excellent service in the comfort of your own home</p>
        <a href="/about" className="btn btn-primary btn-lg">Learn More</a>
      </div>
    </div>
  );
};

export default HomePage;
