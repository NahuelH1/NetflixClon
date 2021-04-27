import react from 'react'
import './styles/Header.css'
import Header from './Header'
import MainMovie from './MainMovie'
import Top10 from './Top10.jsx'
const HomeRender = ()=>{
return(
     <react.Fragment>
       <Header/>
       <MainMovie/>
       <Top10/>
     </react.Fragment>
) 
}

export default HomeRender