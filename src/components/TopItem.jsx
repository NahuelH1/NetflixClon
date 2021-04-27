import react from 'react'
import './styles/TopItem.css'
import TopItem from './TopItem'
const Top10 = (props)=>{
return(
    <li className="Top10Item">
       <p className="Top10Item--number">{props.number}</p>
       <div className="Top10Item--cover"></div>
    </li>
) 
}

export default Top10