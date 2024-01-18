import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      content: "The service was excellent! I highly recommend FixHealth.",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I had a great experience. The doctors are very knowledgeable.",
    },
    {
      id: 3,
      author: "Michael Johnson",
      content: "FixHealth is my go-to for quality healthcare. 5 stars!",
    },
    // Add more testimonials as needed
  ];
  return (
    <div className="home-con">
      <div className="inner-con">
        <div className="main-content">
          <h1 className="heading-con">The Best Way To Get Quality</h1>
          <p className="main-text text-xl text-gray-400 mb-8">
            Here you can find
          </p>
          <div className="buttons">
            <button className="button">
              <Link to="/book-now" className="link-item">
                Book now
              </Link>
            </button>
          </div>
        </div>
        <div className="bg-svg">
          <img
            src="https://res.cloudinary.com/dwffepf9q/image/upload/v1705569348/wmjtyvlsyzapdtdjrcgu.png"
            alt="pic"
            className="pic"
          />
        </div>
      </div>
      <div>
        <h2 className="textmon-heading">Testimonials</h2>
        <ul className="textimonial">
          {testimonials.map((testimonial) => (
            <li className="card" key={testimonial.id}>
              <p className="heading">{testimonial.content}</p>
              <p>- {testimonial.author}</p>
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
};

export default Home;
