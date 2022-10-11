import React, { useState, useEffect } from "react";
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate,Link } from "react-router";

export default function ListaSetor() { 
    const navigate=useNavigate();
    const [dados, setDados] = useState([]);
    const [row,setRow]=useState(0);
   



    useEffect(() => {

        mostrardados();
    }, [])
    function editar(id) {
        navigate(`/editasetor/${id}`)
       
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
                        localStorage.setItem('cad-setor', JSON.stringify(dadosnovos));
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
        let lista = JSON.parse(localStorage.getItem("cad-setor") || "[]");
        setDados(lista)
        setRow(lista.length)
    }
    return (
        <div className="dashboard-container">
            <Menu />

            <div className="principal">
                <Head title=" Lista de Setor" />
                <div className="button_new">
                  <a href="/cadastrosetor ">
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
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    {

                        dados.map((set) => {
                            return (
                                <tr key={set.toString()}>

                                    <td>{set.id}</td>
                                    <td>{set.nome}</td>
                                    <td>{set.email}</td>
                                    <td>
                                        <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => editar(set.id)}

                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => excluir(usu.id)}

                                        />
                                    </td>
                        

                                </tr>
                            )

                        }
                        )
                    }
                    <tr>
                    <td colspan={3} >Total</td>
                    <td colspan={2}> {row}</td>
                    </tr>
                </table>
            </div>

        </div>
    )
} 