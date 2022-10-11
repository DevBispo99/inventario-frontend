import { FiUser,FiTruck,FiArchive,FiClipboard,FiMap } from "react-icons/fi"
export default function Menu(){
    return(

            <div className="menu">
                <p>Menu</p>
                <a href="/listausuarios"><FiUser/>Usuarios</a>
                <a href="/listaempresa"><FiTruck/>Empresas</a>
                <a href="/listapatrimonio"><FiArchive/>Patrimonio</a>
                <a href="/listasetor"><FiClipboard/>Setor</a>
                <a href="/listalotacao"><FiMap/>Lotação</a>

               
            </div>


    )
}