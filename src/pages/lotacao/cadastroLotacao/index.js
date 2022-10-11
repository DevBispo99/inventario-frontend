import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { useNavigate } from "react-router-dom";



export default function CadastroLotacao() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [datalotacao, setDataLotacao] = useState("");
    const [idusu, setIdUsu] = useState("");
    const [idset, setIdSet] = useState("");
    const [idpat, setIdPat] = useState("");
    const [idemp, setIdEmp] = useState("");
    const [empresas, setEmpresas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [patrimonios, setPatrimonios] = useState([]);
    const [setores, setSetores] = useState([]);

    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);

  
    useEffect(() => {

        mostrardados();
    }, [])


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
        setUsuarios(JSON.parse(localStorage.getItem("cad-usuarios") || "[]"));
        setEmpresas(JSON.parse(localStorage.getItem("cad-empresa") || "[]"));
        setPatrimonios(JSON.parse(localStorage.getItem("cad-patrimonio") || "[]"));
        setSetores(JSON.parse(localStorage.getItem("cad-setor") || "[]"));

        setDados(lista);
        
    }

    

    function salvardados(e) {
        e.preventDefault();
       
         if (idemp.length!==0 && idpat.length!==0 && idusu.length!==0){
            alert("aquiiiiii")
            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
            lista.push({
                id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
                datalotacao: datalotacao,
                idemp: idemp,
                idpat: idpat,
                idset: idset,
                idusu: idusu

            })

            localStorage.setItem("cad-lotacao", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listalotacao");
        }
     

    }
    return (
        <div className="dashboard-container">
            <Menu />
            <div className="principal">
                <Head title="Cadastro de Lotação" />
                <section className="form-cadastro">

                    <form onSubmit={salvardados}>

                        <label>
                            Usuários
                        </label>

                        <select onChange={(e) => setIdUsu(e.target.value)} >

                            <option value=""></option>
                            {
                                usuarios.map((usu) => {

                                    return (
                                        <option value={usu.id}>{usu.nome}</option>

                                    )
                                })
                            }
                        </select>

                        <label>
                            empresa
                        </label>

                        <select onChange={(e) => setIdEmp(e.target.value)} >

                            <option value=""></option>
                            {
                                empresas.map((emp) => {

                                    return (
                                        <option value={emp.id}>{emp.nome}</option>

                                    )
                                })
                            }
                        </select>

                        <label>
                            Patrimonio
                        </label>

                        <select onChange={(e) => setIdPat(e.target.value)} >

                            <option value=""></option>
                            {
                                patrimonios.map((pat) => {

                                    return (
                                        <option value={pat.id}>{pat.nome}</option>

                                    )
                                })
                            }
                        </select>

                        <label>
                            setor
                        </label>

                        <select onChange={(e) => setIdEmp(e.target.value)} >

                            <option value=""></option>
                            {
                                setores.map((set) => {

                                    return (
                                        <option value={set.id}>{set.nome}</option>

                                    )
                                })
                            }
                        </select>


                       


                        <label >ID setor </label>
                        <input type="date"
                            value={datalotacao}
                            onChange={e => setDataLotacao(e.target.value)}
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
