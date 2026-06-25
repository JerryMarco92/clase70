
import "./app.css";
import Saludar from "./components/Saludar";
import {Alerta, Funcionando, FalloCatastrofico} from "./components/Alerta";
import {Datos} from "./components/CardTecnologia";

function App() {




  return (
    <>

      <Datos />
      <br />

       <Saludar />
       <br />
      <p>Hace mucho calor aqui...</p>
      <br />
       <Alerta />

       <p>Abriendo valvula de seguridad......</p>
      

      <FalloCatastrofico />




    </>
  )
}

export default App;
