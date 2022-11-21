import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default class Navbar extends Component {

    state={
        menus: [{
            id:1,
            text:'Home',
            url:'/'
        },
        {
            id:2,
            text:'Shop',
            url:'/shop'
        },
        {
            id:3,
            text:'About',
            url:'/about'
        },
        {
            id:4,
            text:'Contact',
            url:'/contact'
        },

        {
            id:5,
            text:'User Data',
            url:'/user'
        },
        
        
        {
            id:6,
            text:'More products',
            url:'/products'
        },

        {
            id:7,
            text:'FAQ',
            url:'/faq'
        }

        
    ]
    }

   
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-sm bg-theme navbar-header text-white">
                <Link to='/' className="navbar-brand ml-5">
                <img src={logo} alt="logo goes here" width="120px" />
                </Link>
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">menu</button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">

                        {this.state.menus.map(menu=>{
                            return(
                            <li key={menu.id} className="nav-items ">
                            <Link to={menu.url} className="nav-link  navbar-header-menu text-uppercase">{menu.text}</Link>
                        </li>
                        )
                        })}

                        
                        
                    </ul>
                </div>
            </nav>

           
            </div>

            
        )
    }
}
