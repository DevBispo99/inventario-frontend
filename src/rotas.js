import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastrousuario from "./pages/usuario/cadastroUsuario"
import Editarusuario from "./pages/usuario/editarUsuario";
import ListaUsuarios from "./pages/usuario/listaUsuario";

import Cadastroempresa from "./pages/empresa/cadastroEmpresa";
import ListaEmpresa from "./pages/empresa/listaEmpresa";
import EditarEmpresa from "./pages/empresa/editarEmpresa";

import EditarPatrimonio from "./pages/patrimonio/editarPatrimonio";
import ListaPatrimonio from "./pages/patrimonio/listaPatrimonio";
import CadastroPatrimonio from "./pages/patrimonio/cadastroPatrimonio";

import CadastroSetor from "./pages/setor/cadastroSetor/index.";
import ListaSetor  from "./pages/setor/listaSetor";
import EditarSetor from "./pages/setor/editarSetor/index.";

import CadastroLotacao from "./pages/lotacao/cadastroLotacao/index";
import ListaLotacao from "./pages/lotacao/listaLotacao/index";
import EditarLotacao from "./pages/lotacao/editarLotacao/index";



import Dashboard from "./pages/dashboard";
import Logon from "./pages/logon";



export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/listausuarios" element={<ListaUsuarios/>}/>
                <Route path="/cadastrousuario" element={<Cadastrousuario />} />
                <Route path="/editarusuario/:id" element={<Editarusuario />} />
               

                <Route path="/listaempresa" element={<ListaEmpresa/>}/>
                <Route path="/cadastroempresa" element={<Cadastroempresa/>}/>
                <Route path="/editarempresa/:id" element={<EditarEmpresa/>}/>

            
                <Route path="/editarpatrimonio/:id" element={<EditarPatrimonio/>}/>
                <Route path="/listapatrimonio" element={<ListaPatrimonio/>}/>
                <Route path="/cadastropatrimonio" element={<CadastroPatrimonio/>}/>


                <Route path="/cadastrosetor" element={<CadastroSetor/>}/>
                <Route path="/listasetor" element={<ListaSetor/>}/>
                <Route path="/editarsetor" element={<EditarSetor/>}/>

                <Route path="/cadastrolotacao" element={<CadastroLotacao/>}/>
                <Route path="/listalotacao" element={<ListaLotacao/>}/>
                <Route path="/editarlotacao" element={<EditarLotacao/>}/>




            </Routes>
        </BrowserRouter>
    )
}