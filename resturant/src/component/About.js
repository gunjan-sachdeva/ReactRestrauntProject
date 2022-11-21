import React, { Component } from 'react'
import Navbar from './Navbar'
import aboutimg from '../assets/about-us.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid text-uppercase about-page">
                    <div className="about-items">
                         <h2 className="about-h2 ">About Us</h2><br/> 
                        <h4 className="about-h4">We don't make coffee <br/> Actually we create memories</h4>
                        <br/>
                        <a href={'/contact'} className="btn btn-warning about button">Contact us</a>
                        </div>
                </div> 
                
                
                <div className="container-fluid p-3">
                        <h3 className="about-us">About Us</h3>
                    <div className="row align-items-start">
                        <div className="col">   
                            <img src={aboutimg} alt="about-us"/>
                        </div>

                        <div className="col div-two">   
                            <p>Our journey from the bean to the cup started in year 2000. Café culture had not set its footprint and coffee was still considered a luxury. Our quest to provide a truly international experience and brew a truly Italian cuppa, led us to create the brand. Spearheading the Indian café culture, coffe house was an opportunity to discover both the coffee and the craft.</p>
                            <br/> <br/>
                            <p>No one has mastered coffee better than the Italians. Tipping our hats their way,  brings new meaning to Italian coffee and eats in the Indian sub-continent.

                            Today, we continue to brew coffee the way world does and in our journey we have created coffee relationships with our customers across India, Sri Lanka, Maldives, Bangladesh, Nepal and Myanmar.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
