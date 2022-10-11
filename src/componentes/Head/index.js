import { FiLogOut} from "react-icons/fi"
import { confirmAlert } from "react-confirm-alert"; //import
import { useNavigate } from "react-router-dom";
import 'react-confirm-alert/src/react-confirm-alert.css'; // import css

export default function Head({title}){
    const navigate =useNavigate();
    const logoff=()=>{
        navigate("/");
    }
    function saida(){
      
        confirmAlert({
          title: 'Atenção',
          message: ' você realmente quer sair?',
          buttons: [
            {
              label: 'Não',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'Sim',
              onClick: () => {logoff()}
            }
          ]
        });
    };
    
    return(
        <div className="head">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="logoff">
              <FiLogOut 
                  size={24} 
                  color="red"
                  cursor="pointer" onClick={saida} />


          </div>
        </div>
        
    )
}