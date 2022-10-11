import React, { useState, useEffect } from "react";
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link } from "react-router";

export default function ListaEmpresa() { 
    const navigate=useNavigate();
    const [dados, setDados] = useState([]);
    const [row,setRow]=useState(0);
    
   



    useEffect(() => {

        mostrardados();
    }, [])
    function editar(id) {
        navigate(`/editarempresa/${id}`)
       
    }

    function excluir(id) {

        confirmAlert({
            title: 'Excluir Cadastro',
            message: ' você realmente quer excluir?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        let dadosnovos = [];
                        dadosnovos = dados.filter(item => item.id != id);
                        setDados(dadosnovos);
                        localStorage.setItem('cad-empresa', JSON.stringify(dadosnovos));
                    }
                },
                {
                    label: 'Não',
                    onClick: () => { }
                }
            ]
        });
    };


    function mostrardados() {
        let lista = JSON.parse(localStorage.getItem("cad-empresa") || "[]");
        setDados(lista)
        setRow(lista.length)
    }
    return (
        <div className="dashboard-container">
            <Menu />

            <div className="principal">
                <Head title=" Lista de Empresas" />
                <div className="button_new">
                  <a href="/cadastroempresa">
                    <FiFilePlus
                    size={24}
                    color="green"
                    cursor="pointer" />
                </a>
                </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Responsavel</th>
                        <th>Contato</th>
                        <th></th>
                    </tr>
                    {

                        dados.map((emp) => {
                            return (
                                <tr key={emp.toString()}>

                                    <td>{emp.id}</td>
                                    <td>{emp.nome}</td>
                                    <td>{emp.responsavel}</td>
                                    <td>{emp.contato}</td>
                                    <td>
                                        <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => editar(emp.id)}

                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => excluir(emp.id)}

                                        />
                                    </td>
                        

                                </tr>
                            )

                        }
                        )
                    }
                    <tr>
                    <td colspan={5} >Total</td>
                    <td colspan={2}> {row}</td>
                    </tr>
                </table>
            </div>

        </div>
    )
} 