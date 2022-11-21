import React, { Component } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from 'react-router-dom';


export default class Footer extends Component {
    render() {
        return (
            <div>
                    <footer className="text-center text-white footer">
                        <section className="d-flex justify-content-between p-4 bg-theme">
                            <div className="me-5">
                                <span>Get connected with us on social media</span>
                            </div>

                            <div>
                                 <a href="https://www.facebook.com" target='_blank' className="text-white me-5">
                                 <FaFacebook className="icons"/>
                                 </a>

                                 <a href="https://www.instagram.com" target='_blank' className="text-white me-5">
                                 <FaInstagram className="icons"/>
                                 </a>

                                 <a href="https://www.google.com" target='_blank' className="text-white me-5">
                                 <FaGoogle className="icons"/>
                                 </a>

                                 <a href="https://www.twitter.com" target='_blank' className="text-white me-5">
                                 <FaTwitter className="icons"/>
                                 </a>
                            </div>
                        </section>

                        <section className="footer-section-2">
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold">Coffee Shop</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                        <p>
                                            <a href="#!" class="text-white">What's New</a>
                                        </p>
                                        <p>
                                             <a href="#!" class="text-white">Baked Items</a>
                                        </p>
                                        <p>
                                             <a href="#!" class="text-white">Latest Combo</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">Coffee Beans</a>
                                        </p>
                                    </div>

                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 class="text-uppercase fw-bold">Useful links</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                        <p>
                                            <Link to='/' className="text-white">Home</Link>
                                            
                                        </p>
                                        <p>
                                            <a href={'/about'} class="text-white">About</a>
                                        </p>
                                        <p>
                                            <a href={'/contact'} class="text-white">Contact</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-white">Privacy & Policy</a>
                                        </p>
                                    </div>

                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 class="text-uppercase fw-bold">Contact</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                                        <p><FaHome className="footer-contact-icons"/>Badarpur, New Delhi</p>
                                        <p><FaMailBulk className="footer-contact-icons"/>hello@coffee.com</p>
                                        <p><FaPhoneAlt className="footer-contact-icons"/>+91-9599397918</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="text-center p-3 copyright">
                        © 2021 Copyright: vikas website
                        </div>
                    </footer>
            </div>
            
        )
    }
}
