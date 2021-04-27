import react from 'react'
import img_user from '../images/user_profile.jpg'
import './styles/ProfileChoserRender.css'
import Header from './Header'
import { Link } from 'react-router-dom'

const ProfileChoserRender = ()=>{
return(
    <div class="profiles">
         <Header/>
         <div class="profiles__container">
         <h1 className="title">¿Quién está viendo ahora?</h1>
        <ul className="usersList">
            <Link to="/home" className="user" style={{textDecoration:"none"}}><img src={img_user} alt="profile image" width="150"/><p>Nombre</p></Link>
            <Link to="/home" className="user" style={{textDecoration:"none"}}><img src={img_user} alt="profile image" width="150"/><p>Nombre</p></Link>
            <Link to="/home" className="user" style={{textDecoration:"none"}}><img src={img_user} alt="profile image" width="150"/><p>Nombre</p></Link>
            <Link to="/home" className="user" style={{textDecoration:"none"}}><img src={img_user} alt="profile image" width="150"/><p>Nombre</p></Link>
            <Link to="/home" className="user" style={{textDecoration:"none"}}><img src={img_user} alt="profile image" width="150"/><p>Nombre</p></Link>

        </ul>
        <button className="button_ProfileManagment" >ADMINISTRAR PERFILES</button>
         </div>
        </div>
)
}

export default ProfileChoserRender