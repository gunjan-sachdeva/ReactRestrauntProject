import React,{useContext} from 'react'
import { DataCall } from './Componentone'

export default function Componentthree() {
  
    const context = useContext(DataCall)
  
    return (
    <div>
        <h1>here {context}</h1>
    </div>
  )
}