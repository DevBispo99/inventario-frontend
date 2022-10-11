import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { useNavigate } from "react-router-dom";


export default function Cadastroempresa() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");

    const [contato,setContato]=useState("");
    const [responsavel,setResponsavel]=useState("");
    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);

    // function validaremail() {

    //     var re = /\S+@\S+\.\S+/;

    //     return re.test(email);

    // }
    useEffect(() => {

        mostrardados();
    }, [])
    function limparLocal(){
        localStorage.removeItem("cad-empresa");
    }

    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-empresa") || "[]");
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
            erroMsg.push("nome da empresa deve ter mais de 3 caracteres")
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
            let lista = JSON.parse(localStorage.getItem("cad-empresa") || "[]");
            lista.push({
                id: Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36), 
                nome: nome,
                contato:contato,
                responsavel:responsavel

            })

            localStorage.setItem("cad-empresa", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listaempresa");
        }
        else {
            setMsg(erroMsg)
        }

    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro de Empresa" />
                <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                        <label>Nome</label>
                        <input placeholder="Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        <label>Responsavel </label>
                        <input placeholder="Nome"
                            value={responsavel}
                            onChange={e=>setResponsavel(e.target.value)}
                        />
                           <label>contato</label>
                        <input placeholder="contato"
                            type="text"
                            value={contato}
                            onChange={e => setContato(e.target.value)}
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
