import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button"
     data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0" class="active" aria-current="true"
       aria-label="Slide 1"></button>

    <button type="button"
     data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1" aria-label="Slide 2"></button>

    <button type="button"
     data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2" aria-label="Slide 3"></button>

    <button type="button"
     data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://bl-i.thgim.com/public/incoming/8kcv7b/article65732695.ece/alternates/FREE_1200/WikiLeaks-CIA_28918.jpg-8f74c.jpg" class="d-block w-100" alt="IPhone" height="550px"/>
    </div>
    <div class="carousel-item">
      <img src="https://imgix.bustle.com/uploads/image/2022/2/9/0dc81455-920c-49ab-a663-7373b8878a7e-iphone.jpeg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5933&fp-y=0.4305" class="d-block w-100" alt="IPhone" height="550px"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg" class="d-block w-100" alt="IPhone" height="550px"/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pocket-lint.com/r/s/660x/assets/images/158557-phones-news-feature-letsgodigital-renders-image3-sr7b0puivr-jpg.webp" class="d-block w-100" alt="IPhone" height="550px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </div>
  );
}

export default App;
