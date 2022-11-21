import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Maggi from './basics/Maggi';


export default class Products extends Component {

 

    state = {apidata:[]}

        componentDidMount(){
            const URL = "https://fakestoreapi.com/products"
            Axios.get(URL).then(res=>{
                this.setState({apidata:res.data});
                console.log(res.data);
            })

        }

        render(){
            return(
                <div className='container-fluid'>
                    <h1 className='text-uppercase'>this is api page</h1>
                    <div className='row d-flex'>
                    {this.state.apidata.map(data =>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            <div className="card h-100">
                                <img src={data.image} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.description}</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        </div>
                    )}
                    </div>
                </div>
            )

        }

}
