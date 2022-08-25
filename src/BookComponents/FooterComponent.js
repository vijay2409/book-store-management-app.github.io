import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const FooterComponent = () => {
    return <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2 className="text-center">Company</h2>
                                <ul>
                                    <li>
                                        <a href="about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Career</a>
                                    </li>
                                    <li>
                                        <a href="/contactus">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2 className="text-center">Policies</h2>
                                <ul>
                                    <li>
                                        <a href="/privacy">Privacy Policies</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms of Use</a>
                                    </li>
                                    <li>
                                        <a href="#">Copyright Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2 className="text-center">Help</h2>
                                <ul>
                                    <li>
                                        <a href="payment">Payment</a>
                                    </li>
                                    <li>
                                        <a href="/shipping">Shipping</a>
                                    </li>
                                    <li>
                                        <a href="return">Return</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2 className="text-center">Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.facebook.com/">
                                            <i className="fab fontawesome-style"><BsFacebook /></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.instagram.com/?hl=en">
                                            <i className="fab fontawesome-style"><BsInstagram /></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                                            <i className="fab fontawesome-style"><BsTwitter /></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.linkedin.com/login">
                                            <i className="fab fontawesome-style"><BsLinkedin /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mt-5">
                            <p className="main-hero-para text-center w=100">
                                Al Rights Reserved @Capgemini
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
};

export default FooterComponent;