import React,{useState} from 'react'
import menu from '../Items';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Shop() {

    const [items, setitems] = useState(menu);

    const filterItem = (cateItems) =>{
        const updatedItems = menu.filter((curElem)=>{
                return curElem.category ===cateItems;
        });

        setitems(updatedItems);
    }



    return (
        <div>
                <div className="maintxt">
                    <h2>Adding Moments of Perfect Sip</h2>
                </div>

                
                <div className=" row menu-items bg-theme">
                    <div className='row'>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> setitems(menu)}>All Items</button> &nbsp;&nbsp; </div>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> filterItem('coffee')}>Coffee</button> &nbsp;&nbsp; </div>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> filterItem('baked')} >Baked</button>&nbsp;&nbsp; </div>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> filterItem('breakfast')}>Breakfast</button>&nbsp;&nbsp; </div>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> filterItem('cake')}>Cakes</button>&nbsp;&nbsp; </div>
                        <div className='col'><button type="button" className="btn btn-danger menu-btn text-white" onClick={()=> filterItem('breakfast')}>Food</button>&nbsp;&nbsp; </div>
                    </div>
                </div>
                
                
                
                <div className='container'>
                <div className="row rowcss">
                {
                    items.map((elem)=>{
                        const {id, name, category,price,image1,description, url} = elem;

                        return(
                            <div className=" col-md-4 col-lg-4 col-xl-4 col-xs-12">
                                <div class="card cardcss ">
                                    <img class="card-img-top" src={image1} alt="Card image cap"/>
                                        <div class="card-body">
                                             <h5 class="card-title">{name}</h5>
                                             <p class="card-text">{description}</p>
                                             <p className="card-text price-txt">{'price ₹'+price}</p>
                                                <br/><br/>
                                            <Link to={elem.url} class="btn btn-warning">Buy Now</Link>
                                        </div>
                                </div>
                            </div>
                          
                        )
                    })
                }

                </div>
                
                            </div>
                
                
                
               
                
                
                
            </div>
    )
}



