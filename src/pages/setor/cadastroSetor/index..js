import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { useNavigate } from "react-router-dom";


export default function CadastroSetor() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [dt_aquisicao, setDt_aquisicao] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);

    // function validaremail() {

    //     var re = /\S+@\S+\.\S+/;

    //     return re.test(email);

    // }
    useEffect(() => {

        mostrardados();
    }, [])


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-patrimonio") || "[]");
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

        // if (email.length == 0) {
        //     erroMsg.push("preencha seu email")
        //     i++;
        // }


        // else if (!validaremail()) {
        //     erroMsg.push('insira um email valido');
        //     i++;
        // }
        if (nome.length < 3) {
            erroMsg.push("nome do patrimonio deve ter mais de 3 caracteres")
            i++;
        }
        // if (senha.length < 3) {
        //     erroMsg.push("Sua senha deve ter mais de 3 caracteres")
        //     i++;
        // }
        // if (verificarduplicidade(email)) {
        //     erroMsg.push("Este email já esta cadastrado")
        //     i++;
        // }
        // else if (senha !== confirmar) {
        //     erroMsg.push("Senha e confirmação não conferem\n")
        //     i++;
        // }
        if (i == 0) {

            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-patrimonio") || "[]");
            lista.push({
                id: Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36), 
                nome: nome,
                dt_aquisicao:dt_aquisicao
                

            })

            localStorage.setItem("cad-setor", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listasetor");
        }
        else {
            setMsg(erroMsg)
        }

    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro de Setor" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Nome do Setor</label>
                        <input placeholder="Nome do Setor"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
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
