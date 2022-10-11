import React, { useState } from "react";
import logo from "../../assets/imagens/fotologin.png"
import './styles.css';
import { useNavigate } from "react-router-dom";

export default function Logon() {
    const [dados, setDados] = useState([]);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function logar(e) {
            e.preventDefault();

        let dadosnovos = [];
        let lista = JSON.parse(localStorage.getItem("cad-usuarios") || "[]");
        dadosnovos = lista.filter(item => item.email == email && item.senha == senha);
       
        if (dadosnovos.length > 0) {
            navigate("/dashboard");
        }
        else {
            alert("email ou senha invalidos")
        }
    
    }
    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={logar}>
                    <h1> faça o seu login</h1>
                    <input placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="senha"
                     type="password"
                     value={senha}
                     onChange={e => setSenha(e.target.value)}
                     />
                    <button className="button_login" type="submit">
                        entrar
                    </button>

                </form>
            </section>
            <section className="div_imagem">
                <img src={logo} width={300} />
                <h1>Sistema de Inventario</h1>

            </section>
        </div>

    )
}
