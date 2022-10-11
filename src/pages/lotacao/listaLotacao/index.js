import React, { useState, useEffect } from "react";
import Head from "../../../componentes/Head";
import Menu from "../../../componentes/Menu";
import { FiEdit, FiDelete, FiFilePlus, FiTrash } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate, Link } from "react-router";

export default function ListaLotacao() {
    const navigate = useNavigate();




    const [dados, setDados] = useState([]);
    const [row, setRow] = useState(0);




    useEffect(() => {

        mostrardados();
    }, [])
    function editar(id) {
        navigate(`/editarlotacao/${id}`)


    }

    function mostrarnome(id) {
        let lista = [];
        let cadastro = [];
        lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
        cadastro = lista.filter(item => item.id == id);
        return cadastro[0].nome;
    }



    // function mostrarnome(id,posicao){
    //     let lista = [];
    //     let cadastro = [];
    //     if(posicao==1){
    //         lista=JSON.parse(localStorage.getItem("cad-empresas")||"[]");
    //     }

    //     if(posicao==2){
    //         lista=JSON.parse(localStorage.getItem("cad-usuarios")||"[]");
    //     }

    //     if(posicao==3){
    //         lista=JSON.parse(localStorage.getItem("cad-setores")||"[]");
    //     }

    //     if(posicao==4){
    //         lista=JSON.parse(localStorage.getItem("cad-patrimonio")||"[]");
    //     }
    //     cadastro = lista.filter(item=>item.id==id)  
    //     return cadastro[0].nome    
    // }







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
                        localStorage.setItem('cad-lotacao', JSON.stringify(dadosnovos));
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
        let lista = JSON.parse(localStorage.getItem("cad-lotacao") || "[]");
        setDados(lista)
        setRow(lista.length)
    }
    return (
        <div className="dashboard-container">
            <Menu />

            <div className="principal">
                <Head title=" Lista de Lotação" />
                <div className="button_new">
                    <a href="/cadastrolotacao ">
                        <FiFilePlus
                            size={24}
                            color="green"
                            cursor="pointer" />
                    </a>
                </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Empresa</th>
                        <th>Usuario</th>
                        <th>Setor</th>
                        <th>patrimonio</th>
                        <th>Data de Lotação</th>
                    </tr>
                    {

                        dados.map((lot) => {
                            return (
                                <tr key={lot.toString()}>

                                    <td>{lot.id}</td>
                                    <td>{mostrarnome (lot.idemp,1)}</td>
                                    <td>{mostrarnome (lot.idusu,2)}</td>
                                    <td>{mostrarnome(lot.idset,3)}</td>
                                    <td>{mostrarnome(lot.idpat,4)}</td>
                                    <td>{mostrarnome(lot.datalotacao)}</td>
                                    <td>
                                        <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => editar(lot.id)}

                                        />
                                    </td>
                                    <td>
                                        <FiTrash
                                            color="red"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e) => excluir(lot.id)}

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