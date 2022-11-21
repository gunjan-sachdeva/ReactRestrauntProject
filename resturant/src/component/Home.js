import React, {useState, useContext, createContext} from "react";
import homeVideo from '../assets/homeVideo.mp4'
import Carousel from 'react-elastic-carousel'
import menu from '../Items';
import img1 from '../assets/img1.jpg';
import { Link } from "react-router-dom";
import Shop from './Shop'


export default function Home(){
    const [items, setitems] = useState(menu);

    

    return(
        <div>
        <div className="container-fluid home">
        <img className="home-video"  src={img1} type="video/mp4"/>
        

        <div className="overlay">
        </div>

        <div className="video-content">
            <h3>Experiece the best Latte</h3>
        </div>
    </div>

    <div className="container home-story">
        <h1>OUR STORY</h1>
            <br/>
        <p>Established in year 2000, Our Coffee Company is the pioneer of coffee culture in India. The Café chain of espresso bars delivers a truly Italian coffee experience in warm, friendly and relaxed environment. It provides a comfortable place for people to unwind over interesting conversations and a hot cup of coffee. The Coffee Company Limited has over 225 Coffee Espresso Cafe and Coffee Kiosks across India including its Franchise partners. Besides India,  Coffee also has cafés in locations across Myanmar and Nepal.</p>
    </div>
        <br/><br/>
    <div className="container-fluid home-items">
            <h2>What's New</h2>
        <div className="home-items1 container-fluid">
            <div className="  home-carousel">
               <Carousel className="row"  enableAutoPlay autoPlaySpeed={2500} itemsToShow={3}>
                
                    {
                        items.map((menuItems)=>{
                            return(
                                <div className="col-12">
                                <div class="card cardcss1" key={menuItems.id}>
                                <img class="card-img-top" src={menuItems.image1} alt="Card image cap"/>
                                <div class="card-body">
                                  <h5 class="card-title">{menuItems.name}</h5>
                                  
                                  
                                  
                                </div>
                              </div>
                              </div>
                            )
                        
                            
                        })
                    }
               </Carousel>
               
               
                         

                                
                        
                        
        </div>

        
        </div>
                    
       <Link to="/shop"> <h4 className="checkOut-home">Check out our full menu</h4> </Link>
       </div>

       <div className="container-fluid frenchise-img">
       <div className="container">
       <h1>Franchise with Us!</h1>
       <br/>
       <p>Want to be a part of the Coffee House family? Become a link in our exciting<br/> chain of craft coffee by franchising with us! Discover the thriving coffee <br/> culture and stir up strong relationships, reinforced by customer loyalty <br/> for India’s first coffee café and its long established identity <br/> of offering steadfast quality and service.

       Come be a part of the <br/> ever-growing our's family!</p>
                    <br/>
                    <Link to="/contact" className="frenchise-imgcontact"><p className="frenchise-imgcontact">Contact Us now!!</p></Link>
       </div>  
       </div>
                        
        </div>
       
    )
}