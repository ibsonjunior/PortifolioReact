import boneco from'../Principal/imagem.png'
import linkedin from '../Principal/linkedin.png'
import github from '../Principal/git-hub.png'

export default function Principal(){

    return(
        <>

            <div className="bg__profile">
                <main  className="l-page">
                    <h1 className="title">Olá, tudo bem?</h1>
                    <p className="description">Seja bem vindo ao meu currículo on-line.</p>

                <nav className="c-nav ">
                    <a className="c-nav__item" href="https://www.linkedin.com/in/ibson-jr/" target="_bank"><img className="logoBtn"  src={linkedin} alt="Logo"/></a>
                    <a className="c-nav__item" href="https://github.com/ibsonjunior" target="_bank"><img className="logoBtn"  src={github} alt="Logo"/></a>
                </nav>

                    <a className="c-btn" href="#sobre-mim">Sobre mim</a>
                </main>

                <img className="boneco"  src={boneco} alt="Logo"/>
            </div>

        </>
        
    )
}