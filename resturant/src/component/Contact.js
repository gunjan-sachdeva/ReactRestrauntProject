import React, { Component } from 'react'
import { ImOffice } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import ReactFormInputValidation from "react-form-input-validation";

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            email: "",
            phone_number: "",
            query:""
          },
          errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name: "required",
            email: "required|email",
            phone_number: "required|numeric|digits_between:10,12",
            query:"required"
        });
        this.form.onformsubmit = (fields) => {
        }
      }
    render() {
        return (
            <div>
                <div className="container-fluid p-3">
                    <div className="row align-items-start">
                        <div className="col">
                            <h3>Query ? Let's Connect with Us</h3>
                            
                            <div className="contact-img1">
                            <p className="footer-para"><ImOffice/> New Delhi</p>
                            <p><ImPhone/> +91-9599397918</p>
                            <p><SiGmail/> hello@coffee.in</p>
                            </div>
                        
                        </div>
                        
                        <div className="col">
                            <h3>Contact Us</h3>

                         

                            <form className="contact-form1" onSubmit={this.form.handleSubmit}>

                                <div className="mb-2">
                                <p>
                                    <label for="name" className="form-label label1">Enter Your Name</label>
                                    <input type="name" name="name"
                                        onBlur={this.form.handleBlurEvent}
                                        onChange={this.form.handleChangeEvent}
                                        value={this.state.fields.name} className="form-control" 
                                        placeholder={this.props.name}
                                    /> 
                                </p>

                                <label className="error">
                                    {this.state.errors.name ? this.state.errors.name : ''}
                                </label>
                                </div>

                                <div className="mb-2">
                                <p>
                                    <label for="email" className="form-label label1">Enter Your Email</label>
                                    <input type="email" name="email"
                                        onBlur={this.form.handleBlurEvent}
                                        onChange={this.form.handleChangeEvent}
                                        value={this.state.fields.email} className="form-control" 
                                        placeholder={this.props.email}
                                    /> 
                                </p>

                                <label className="error">
                                    {this.state.errors.email ? this.state.errors.email : ""}
                                </label>
                                </div>

                                <div className="mb-2">
                                <p>
                                    <label for="phone_number" className="form-label label1">Enter Your Tel_no</label>
                                    <input type="phone_number" name="phone_number"
                                        onBlur={this.form.handleBlurEvent}
                                        onChange={this.form.handleChangeEvent}
                                        value={this.state.fields.phone_number} className="form-control" 
                                        placeholder={this.props.phoneNumber}
                                    /> 
                                </p>

                                <label className="error">
                                    {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                                </label>
                                </div>

                                <div className="mb-2">
                                <p>
                                    <label for="exampleFormControlTextarea1" className="form-label label1">Query ??</label>
                                    <textarea type="query" name="query"
                                        onBlur={this.form.handleBlurEvent}
                                        onChange={this.form.handleChangeEvent}
                                        value={this.state.fields.query} className="form-control" 
                                    ></textarea> 
                                </p>

                                <label className="error">
                                    {this.state.errors.query ? this.state.errors.query : ""}
                                </label>
                                </div>

                                <p>
                                     <button className='btn btn-danger contact-submit' type="submit">Submit</button>
                                </p>

                                
                                

                            </form>
                                
                                

                                
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.defaultProps={
    name:'Enter Your Name',
    email:'Please Enter a Valid Email Adress',
    phoneNumber:'Enter Contact Number btw 10-12 digit'
  }
