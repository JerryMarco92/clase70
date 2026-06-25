
import "./app.css";
import Saludar from "./components/Saludar";
import { Alerta, Funcionando, FalloCatastrofico } from "./components/Alerta";
import { Datos } from "./components/CardTecnologia";
import { usuarios } from "./components/ListaUsuarios";

function App() {




  return (
    <>

      <Datos />
      <br />


      <Funcionando />

      <Saludar />
      <br />
      <p>Hace mucho calor aqui...</p>
      <br />
      <Alerta />

      <p>Abriendo valvula de seguridad......</p>


      <FalloCatastrofico />

      <p>Personas en el edificio ahora:</p>
      <ul>
        {usuarios.map((usuario) => {
          return (
            <>
              <li>{usuario.nombre} - {usuario.trabajo} - planta: {usuario.nivel}</li>
            </>
          );
        })
      }
      </ul>




    </>
  )
}

export default App;
