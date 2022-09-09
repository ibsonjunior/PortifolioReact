import './assets/global.css'
import Footer from './Componentes/Footer/Footer'
import Formulario from './Componentes/Formulario/Formulario'
import Principal from './Componentes/Principal/Principal'
import Sidebar from './Componentes/Sidebar/Sidebar'
import SobreMim from './Componentes/SobreMim/SobreMim'




export default function App() {

  return (
    <>
      <div className="l-app" id="home">

          {/*Sidebar e Navbar*/}
          <Sidebar/>
      
        <div className="l-content">

          {/* <!-- Sessão Principal --> */}
          <Principal/>

          {/* <!-- Sessão Sobre mim --> */}
           <SobreMim/>

          {/* <!-- Sessão Contatos--> */}
          <div className="l-pag" id="contatos">
           
          {/* Formulário */}
          <Formulario/>

          {/* Footer */}
          <Footer/>

          </div>

        </div>
      </div>
    </>
  )
}

