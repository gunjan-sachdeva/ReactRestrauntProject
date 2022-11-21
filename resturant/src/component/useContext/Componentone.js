import React,{createContext} from 'react'
import Componenttwo from './Componenttwo';

const DataCall = createContext();

export default function Componentone() {
  return (
    <DataCall.Provider value={'calling api using useContex'}>
       <Componenttwo/>
    </DataCall.Provider>
  )
}

export {DataCall};