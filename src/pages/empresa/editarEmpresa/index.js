import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { useNavigate, useParams } from "react-router-dom";


export default function Editarempresa() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [contato, setContato] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);


    useEffect(() => {

        mostrardados();
    }, [])


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-empresa") || "[]");
        setDados(lista);
        let emp = lista.filter(item => item.id == id);
        setNome(emp[0].nome);
        setResponsavel(emp[0].responsavel);
        setContato(emp[0].contato);

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

            if (nome.length < 3) {
                erroMsg.push("O nome da empresa deve ter mais de 3 caracteres")
                i++;
            }

            if (i == 0) {

                setMsg("");
                let dadosnovos = [];
                let lista = JSON.parse(localStorage.getItem("cad-empresa") || "[]");
                dadosnovos = lista.map((function (item) {

                    if (item.id == id) {
                        return {
                            id: id,
                            nome: nome,
                            responsavel: responsavel,
                            contato: contato
                        }
                    }
                    else {
                        return {
                            id: item.id,
                            nome: item.nome,
                            responsavel: item.responsavel,
                            contato: item.contato
                        }
                    }
                }));
                localStorage.setItem("cad-empresa", JSON.stringify(dadosnovos));
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
                                onChange={e=>setContato(e.target.value)}
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
}