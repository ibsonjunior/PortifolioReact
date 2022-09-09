import foto from './ibsonprofile.png'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import aws from './aws.png'
import java from './java.png'

export default function SobreMim(){
    return(
      <>
         

        <div className="sobreMim" id="sobre-mim">

          <img className="foto" src={foto} alt="Logo"/>

          <article>
            <h1 className="title titleSobreMim">Sobre mim</h1>
            <p className="description descriptionSobreMim">
              Meu nome é Ibson, sou de Recife-PE. Estou em desenvolvimento na área de tecnologia,
              adquirindo novos conhecimentos
              e habilidades com a finalidade
                de me tornar um Desenvolvedor 
                Web Full Stack. 
                </p>
          </article>

      
        </div>


        <div className='skills_div'>
        <h2 className="title titleSobreMim">Skills</h2>
          <div className='skills'>

            
          <img className="lang_imgs" src={html} alt="Logo"/> 
          <img className="lang_imgs" src={css} alt="Logo"/>
          <img className="lang_imgs" src={js} alt="Logo"/>
          <img className="lang_imgs" src={react} alt="Logo"/>
          <img className="lang_imgs" src={aws} alt="Logo"/>
          <img className="lang_imgs" src={java} alt="Logo"/>

  

          </div>
        </div>


      </>

      
      
    )
}