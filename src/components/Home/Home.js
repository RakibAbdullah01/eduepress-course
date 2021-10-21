import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = (props) => {
    const mainCourse = props.coueses.slice(0,4);
    return (
        <div>
            {/* Carusel Start */}
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/37Vv2XY/img-1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="home-info">
                    <p>Start learnig you desire course with EduExpress</p>
                    <h3>Improve Skills</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jZqD4gL/img-2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className="home-info">
                    <p>Start learnig you desire course with EduExpress</p>
                    <h3>Learn & Discover</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ng8b3N7/img-3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="home-info">
                    <p>Start learnig you desire course with EduExpress</p>
                    <h3>New Knowledge</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Carusel End */}


        <div className="row p-4 d-flex justify-content-around">
        <h2 className="populer-courses">Populer Courses</h2>

            {mainCourse.map(crs=>
            <div class="col p-5">
                <div class="card h-100 ">
                    <img
                        src={crs.image}
                        class="card-img-top w-100 img-fluid"
                        height="250"
                        alt=".."
                />
                <div class="card-body">
                    <h5 class="card-title">{crs.name}</h5>
                    <h6>
                        <i class="far fa-clock"></i> {crs.duration}
                    </h6>
                    <h6>
                        <i class="fas fa-chalkboard-teacher"></i> {crs.mentor}
                    </h6>
                    <h6>Price : {crs.price}</h6>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">
                            <i class="fas fa-sign-in-alt"></i> Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
            
            
            <Link to="/courses" className="find-more d-flex justify-content-center">
                <button className="btn btn-primary">
                    Find More Courses <i class="fas fa-arrow-right"></i>
                </button>
            </Link>
        </div>
    </div>


    );
};

export default Home;