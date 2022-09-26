import "./styles.css";
import star from "./images/icon-star.svg";
import colton from "./images/image-colton.jpg";
import anne from "./images/image-anne.jpg";
import irene from "./images/image-irene.jpg";

function Home() {

  function Star() {

    return <div>
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  }
  
  return (
  <div className="container">
    <div className="upper">
      <div className="left">
        <div className="title">10,000+ of our users love our products.</div>
        <div className="description">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</div>
      </div>
      <div className="right">
        <div className="card left-card">
          <Star />
          <div>Rated 5 Stars in Review</div>
        </div>
        <div className="card">
          <Star />
          <div>Rated 5 Stars in Report Guru</div>
        </div>
        <div className="card right-card">
          <Star />
          <div>Rated 5 Stars in BestTech</div>
        </div>
      </div>
    </div>
    <div className="lower">
      <div className="main-card">
        <div className="cardaccount">
          <img src={colton} alt="colton" className="profile" />
          <div>
            <div>Colton Smith</div>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
      </div>
      <div className="main-card card-upper">
        <div className="cardaccount">
          <img src={irene} alt="colton" className="profile" />
          <div>
            <div>Irene Roberts</div>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
      </div>
      <div className="main-card card-lower">
        <div className="cardaccount">
          <img src={anne} alt="colton" className="profile" />
          <div>
            <div>Anne Wallace</div>
            <span>Verified Buyer</span>
          </div>
        </div>
        <p>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
      </div>
    </div>
  </div>)
}

export default Home;