import react from 'react'
import './styles/MovieList.css'
import TopItem from './TopItem'
const Top10 = ()=>{
return(
     <div className="Top10--container">
        <h3>10 más populares en Argentina hoy</h3>
      <ul className="Top10--MovieList">
        <TopItem number="1"/> 
        <TopItem number="2"/> 
        <TopItem number="3"/> 
        <TopItem number="4"/> 
        <TopItem number="5"/> 
        <TopItem number="6"/> 
        <TopItem number="7"/> 
        <TopItem number="8"/> 
        <TopItem number="9"/> 
        <TopItem number="10"/> 
      </ul>
     </div>
) 
}

export default Top10