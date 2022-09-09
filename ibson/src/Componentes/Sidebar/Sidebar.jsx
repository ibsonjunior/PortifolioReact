import { useState } from "react";
import { List } from "phosphor-react";
import { XSquare  } from "phosphor-react";
import logo from "../Sidebar/ibson-junior.png"



export default function Sidebar(){

    const[sidebarHidden, setSidebarOpen] = useState(false);

    function openMenu(){       
        setSidebarOpen(!sidebarHidden);
    }

   return( 

    
    <>
      
      <div className="navbar">
        <a href="#home"><img className="titleHeader" src={logo} alt="Logo"/></a>
        <button onClick={openMenu}  tabIndex={0} className="l-sidebar__btn" >
      <List  size={32} />
      </button>


      {sidebarHidden  &&   <div className="l-sidebar"> 
              <button onClick={openMenu}  tabIndex={0} className="l-sidebar__btn" >
                <XSquare  size={32} className="btn_close"/>
              </button>
                
              <nav className="c-sidebar">
                <a className="c-nav__item" href="#home">Home</a>
                <a className="c-nav__item" href="#sobre-mim">Sobre mim</a>
                <a className="c-nav__item" href="#contatos">Contato</a>
              </nav>
            </div> }
        
      </div>

      
   </>
    
   
  )
}
