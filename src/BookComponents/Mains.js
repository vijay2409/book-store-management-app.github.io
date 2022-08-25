import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SearchBar from '../Mains/SearchBar';


class Mains extends Component {
    render() {
        return (
            <div className='text-center'>
                {/* <h1 className='display-3'>Book Management Application</h1> */}
                {/* <SearchBar/> */}
                <div style={{ display: 'initial', text:'center', width: 1050, padding: 50 }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                height="400px"
                                width="1200px"
                                src="/images/1.jpg"
                                alt="One"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                height="400px"
                                width="1200px"
                                src="/images/2.jpg"
                                alt="Two"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                height="400px"
                                width="1200px"
                                src="/images/3.jpg"
                                alt="Three"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                height="400px"
                                width="1200px"
                                src="/images/4.jpg"
                                alt="Four"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                height="400px"
                                width="1200px"
                                src="/images/5.jpg"
                                alt="Five"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Mains;