import React, {useState} from 'react'
import Navbar from '../Navbar'
import './Items.css';
import menu from '../../Items'
import latte from '../../assets/images/Espresso.jpg'
import {useSelector, useDispatch} from 'react-redux';
import {incre, decre} from '../../actions/index';
import reviewimg from '../../assets/review.png';

export default function Espresso() { 
    
    const myState = useSelector((state)=> state.changeTheNumber);
    const dispatch = useDispatch();
        return (
            <div className='container-fluid body-one'>

                <div className='smooth'>

                    <section className='section-one'>
                    <div className='row'>
                        <div className='col item-img'> 
                        <img src={latte}/>
                        </div>

                        <div className='col item-buy'>
                        <h1>{menu[8].name}</h1>
                        <br/>
                        <p><span className='dot'></span>  In Stock Available</p>
                        <a href='#form' style={{textDecoration: 'none'}}><p className='review'>Be The First To Review it</p></a>
                        <hr/>
                        <p>price : <span className='price'>{menu[8].price}</span></p>
                        
                        <p>Delivers within 30 mins</p>

                        <div className='quantity'>
                            <button className='btn btn-danger quantity-minus' title='Decrement' onClick={() => dispatch(decre())}><span>-</span></button>
                            <input name='quantity' type='text' className='quantity-input' value={myState}/>
                            <button className='btn btn-danger quantity-minus' title='Decrement'
                             onClick={() => dispatch(incre())} ><span>+</span></button>
                        </div>
                        <hr width={200}/>
                        <p>{menu[8].description}</p>

                        <br/>
                        <button className='btn btn-danger'>buy now</button>
                        </div>
                    </div>
                    </section>

                    <section className='section-two' id='form'>
                    <div className='row'>
                        <div className='col review-form'>
                        <h2>Please Give us a feedback</h2>
                        <form>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Your Name</label>
                          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Name"/>
                        </div>
                        <div class="form-group">
                          
                          <label for="exampleInputEmail1">Eail address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">Review</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
    
                        
                        <button type="submit" class="btn btn-danger">Submit</button>
                      </form>
                        </div>

                        <div className='col '>
                              <img src={reviewimg} width={500} height={300} className='review-img'/>
                        </div>
                    </div>
                    
                    </section>
                    

                </div>

                
            </div>
        )
    
}
