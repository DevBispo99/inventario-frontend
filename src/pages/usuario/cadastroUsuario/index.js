import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu"
import { useNavigate } from "react-router-dom";


export default function Cadastrousuario() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);

    function validaremail() {

        var re = /\S+@\S+\.\S+/;

        return re.test(email);

    }
    useEffect(() => {

        mostrardados();
    }, [])


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-usuarios") || "[]");
        setDados(lista);
    }

    function verificarduplicidade(email) {
        let dadosnovos = [];
        dadosnovos = dados.filter(item => item.email == email);
        if (dadosnovos.length > 0) {
            return true
        }
        return false;
    }

    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let erroMsg = [];

        if (email.length == 0) {
            erroMsg.push("preencha seu email")
            i++;
        }


        else if (!validaremail()) {
            erroMsg.push('insira um email valido');
            i++;
        }
        if (nome.length < 3) {
            erroMsg.push("Seu nome deve ter mais de 3 caracteres")
            i++;
        }
        if (senha.length < 3) {
            erroMsg.push("Sua senha deve ter mais de 3 caracteres")
            i++;
        }
        if (verificarduplicidade(email)) {
            erroMsg.push("Este email já esta cadastrado")
            i++;
        }
        else if (senha !== confirmar) {
            erroMsg.push("Senha e confirmação não conferem\n")
            i++;
        }
        if (i == 0) {

            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-usuarios") || "[]");
            lista.push({
                id: Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36), 
                nome: nome,
                email: email,
                senha: senha

            })

            localStorage.setItem("cad-usuarios", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listausuarios");
        }
        else {
            setMsg(erroMsg)
        }

    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro de Usuário" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        <label>Email</label>
                        <input placeholder="Email@exemplo.com"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Senha</label>
                        <input placeholder="senha"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}

                        />
                        <label>Confirmar Senha</label>
                        <input placeholder="repetir senha"
                            type="password"
                            value={confirmar}
                            onChange={e => setConfirmar(e.target.value)}

                        />
                        <button className="button_save" type="submit">
                            Salvar
                        </button>
                        <pre> {msg}</pre>

                    </form>

                </section>
            </div>
        </div>

    )
}
