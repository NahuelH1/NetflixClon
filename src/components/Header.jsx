import react from 'react'
import './styles/Header.css'
import headerLogo from '../images/netflix_header.png'
const Header = ()=>{
return(
    <div class="Header">
       <ul class="Header-list">
        <li>
          <a href=""><img class="Header--logo"src={headerLogo} alt="headerLogo" width="100"/></a>    
        </li>
         <li class="Header-item">
           <p>Inicio</p>
         </li>
         <li class="Header-item">
           <p>Series</p>
         </li>
         <li class="Header-item">
           <p>Películas</p>
         </li>
         <li class="Header-item">
           <p>Novedades populares</p>
         </li>
         <li class="Header-item">
           <p>Mi lista</p>
         </li>
       </ul>
       <div className="Header-profile">
         <img src="" alt=""/>
       </div>
     </div>
) 
}

export default Header