import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {Link} from 'react-scroll';

function UncontrolledExample() {
  return (
    // <Carousel>
      <div className='container-fluid'>
            <div class="carousel">
                <ul class="slides">
                <input type="radio" name="radio-buttons" id="img-1" checked />
                <li class="slide-container">
                    <div class="slide-image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg" />
                    </div>
                    <div class="carousel-controls">
                    <label for="img-3" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-2" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                    </div>
                </li>
                <input type="radio" name="radio-buttons" id="img-2" />
                <li class="slide-container">
                    <div class="slide-image">
                    <img alt='logo' src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true" />
                    </div>
                    <div class="carousel-controls">
                    <label for="img-1" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-3" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                    </div>
                </li>
                <input type="radio" name="radio-buttons" id="img-3" />
                <li class="slide-container">
                    <div class="slide-image">
                    <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" />
                    </div>
                    <div class="carousel-controls">
                    <label for="img-2" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-1" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                    </div>
                </li>
                <div class="carousel-dots">
                    <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                    <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                    <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
                </div>
                </ul>
            </div>
        </div>
    // </Carousel>
  );
}

export default UncontrolledExample;