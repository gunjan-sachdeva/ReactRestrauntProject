import React,{useState, useEffect, useContext} from 'react';
import Componentone, { dataCall } from './useContext/Componentone';

function UserData() {

    

    const [users, setusers] = useState([]);

    const getUsers = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        setusers(await response.json());
        
    }

    useEffect(()=>{
        getUsers();
    },[])

  return (
      <div>
        <h1>{<Componentone/>}</h1>
        <br/>

        <div className='row'>
            {
                users.map((res)=>{
                    return(
                        <div className='col-md-4 col-lg-4 col-sm-12'>
                        <div className="card container cardss-css">
                            
                            <div className="card-body">
                                <h5 className="card-title">Name: {res.name}</h5>
                                <h5 className="card-title">UserName: {res.username}</h5>
                                <p className="card-text">Email: {res.email}</p>
                                
                            </div>
                         
                        </div>
                            <br/>
                        </div>
                        
                    )
                })
            }
           
        </div>

                
      </div>
  );
}

export default UserData;