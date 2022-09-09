import { useState } from "react";

import java from "./—Pngtree—development concept in 3d isometric_7601746.png"


export default function Formulario(){

    const [form, setForm] = useState({
      name : "",
      email: "",
      subject: ""
    })

    //Verfica os campos estão vázios
    const [emptyValues, setEmptyValues] = useState(false);

    //Valida o email
    const [validEmail, setValidEmail] = useState(true);



//Função para atualizar o valor do form
    const handleChange = (e) => {
      //Nome do campo editado = e.target.name
     
      //Valor do campo enviado = e.target.value
      setValidEmail(true)
      const newProp = form;
      newProp[e.target.name] = e.target.value;
      setForm({ ...newProp })
    }

    //Validação
    const handleSubmit = (e) =>{
      //Não enviar automaticamente 
      e.preventDefault()

      //Verifica se os valores são vázios 
      let emptyValues = Object.values(form).some(obj => obj == "");
      //Se estiver vázio ele vai renderizar uma mensagem de spam
      setEmptyValues(emptyValues)

      //Verificar se o email é válido
      const validEmail = form["email"].toLocaleLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      setValidEmail(validEmail)

      if(!emptyValues && validEmail){
        //Posta em algum lugar
        fetch("http://127.0.0.1:5173/", {method: "POST", body: JSON.stringify(form)})

        e.currentTarget.submit()

        alert("Mensagem enviada!", )
      }

    }


    return(
      
        <>
        <div className="contatos">
          <h1 className="title">Posso te ajudar?</h1>
        </div>
       
        <div className="areaFormulario">
        <form
            name="contact"
            className="c-form"
            onSubmit={(e) => {handleSubmit(e)}}
            >   
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  {/*onBlur verifica depois que o usuário clica fora do campo  */}
                  <input type="text" placeholder="Digite seu nome" name="name" id="name" className="c-form__control" onBlur={(e) => handleChange(e)}   />
                  {/* Se for true, vázio, vai renderizar essa mensagem */}
                  {emptyValues && form["name"] == "" ? <span className="error">O campo precisa ser preencido!</span> : ""}
                </div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" name="email" id="email" className="c-form__control" onBlur={(e) => handleChange(e) }/>
                  {/* Se for true, vázio, vai renderizar essa mensagem */}
                  {emptyValues && form["email"] == "" ? <span className="error">O campo Precisa ser preencido!</span> : ""}
                  {!validEmail  ?  <span className="error">E-mail inválido</span> : ""}
                </div>
                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">Assunto</label>
                  {/* onChange funciona melhor com modificação em temppo real, verifica enquanto está no campo */}
                  <select id="subject" className="c-form__control" name="subject" defaultValue={'Qual é o assunto' } onChange={(e) => handleChange(e)}>
                 {/* Se for true, vázio, vai renderizar essa mensagem */}
                 <option value="Qual é o assunto" disabled >Qual é o assunto</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                  {emptyValues && form["subject"] == "" ? <span className="error">O campo precisa ser preencido!</span> : ""}
                </div>
                <div className="c-form__group">
                  <label   htmlFor="messager" className="c-form__label">Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control"></textarea>
                  
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit" >Enviar</button>
                </div>


               

        </form> 

        <img className="img_java" src={java} alt="java img"/>

        </div>        
        


        </>
    );

    }