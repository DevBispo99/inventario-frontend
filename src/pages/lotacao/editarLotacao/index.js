import React, { useState, useEffect } from 'react';
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { useNavigate } from "react-router-dom";



export default function CadastroLotacao() {
    const navigate = useNavigate();
    // const { id } = useParams();
    const [nome, setNome] = useState("");
    const [dt_lotacao, setDt_lotacao] = useState("");
    const [id_usu, setId_usu] = useState("");
    const [id_set, setId_set] = useState("");
    const [id_pat, setId_pat] = useState("");
    const [id_emp, setId_emp] = useState("");
    const [empresa, setEmpresa] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [patrimonio, setPatrimonio] = useState([]);
    const [setor, setSetor] = useState([]);

    const [msg, setMsg] = useState([]);
    const [dados, setDados] = useState([]);

  

    useEffect(() => {

        mostrardados();
    }, [])


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
        setUsuario(JSON.parse(localStorage.getItem("cad-usuarios") || "[]"));
        setEmpresa(JSON.parse(localStorage.getItem("cad-empresas") || "[]"));
        setPatrimonio(JSON.parse(localStorage.getItem("cad-patrimonio") || "[]"));
        setSetor(JSON.parse(localStorage.getItem("cad-setor") || "[]"));

        setDados(lista);
        
    }

   
    function salvardados(e) {
        e.preventDefault();
        let i = 0;
        let erroMsg = [];

       
        if (nome.length < 3) {
            erroMsg.push("nome do patrimonio deve ter mais de 3 caracteres")
            i++;
        }
        
        if (i == 0) {

            setMsg("");
            let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
            lista.push({
                id: Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36),
                nome: nome,
                dt_lotacao: dt_lotacao,
                id_emp: id_emp,
                id_pat: id_pat,
                id_set: id_set,
                id_usu: id_usu

            })

            localStorage.setItem("cad-lotacao", JSON.stringify(lista));
            alert("Dados salvos com sucesso!");
            navigate("/listalotacao");
        }
        else {
            setMsg(erroMsg)
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
                            empresa
                        </label>

                        <select onChange={(e) => setId_emp(e.target.value)} >

                            <option value=""></option>
                            {
                                empresa.map((emp) => {

                                    return (
                                        <option value={emp.id}>{emp.nome}</option>

                                    )
                                })
                            }
                        </select>

                        <label>
                            Patrimonio
                        </label>

                        <select onChange={(e) => setId_pat(e.target.value)} >

                            <option value=""></option>
                            {
                                patrimonio.map((pat) => {

                                    return (
                                        <option value={pat.id}>{pat.nome}</option>

                                    )
                                })
                            }
                        </select>

                        <label>
                            setor
                        </label>

                        <select onChange={(e) => setId_emp(e.target.value)} >

                            <option value=""></option>
                            {
                                setor.map((set) => {

                                    return (
                                        <option value={set.id}>{set.nome}</option>

                                    )
                                })
                            }
                        </select>


                       


                        <label >ID setor </label>
                        <input type="date"
                            value={dt_lotacao}
                            onChange={e => setDt_lotacao(e.target.value)}
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
