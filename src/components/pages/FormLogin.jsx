import { useState, useEffect } from 'react'
import './FormLogin.css'




const FormLogin = () => {
    const [userName, setUsername] = useState("")
    const [errorFor, setErrorFor] = useState()


    const handleSubmit = (e) => {
    e.preventDefault()
    window.alert(`Dados do ${message}`)
}
    

    return (
       <section className="section">
        <div className="container">
         <div className="header">
            <h2>Create Account</h2></div>
            <form onSubmit={handleSubmit} className="form" id="form">
                <div className="form-control">
                    <label>Username</label>
                    <input  onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Digite seu username" id="nome"></input>
                    {/*userName.length == 0  && <small>Preencha este campo</small>*/}
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" placeholder="Digite seu email" id="email"></input>
                    
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" placeholder="Digite sua senha" id="password"></input>
                    
                </div>
                <div className="form-control">
                    <label>Confirm password</label>
                    <input type="text" placeholder="Digite sua senha" id="passwordtwo"></input>
                    {/*<small>Error message</small>*/}
                </div>
                <button>SUBMIT</button>
            
            </form>
         
         </div>
       </section>
       
    )
}

export default FormLogin