function Alerta(){
      const temperatura = 801;


return (


    <p>La temperatura= {temperatura}º, ha superado el limite, ocasionando: <br /> {temperatura > 800 ? "el reactor se fusionara en 5 minutos." : "Emergencia Tecnica."}
        Activar: {temperatura > 500 ? " enfriamiento de emergencia." : "Llamar a mantenimiento, confirmar estado de protocolo."} </p>



)
}

function Funcionando(){
    return (
        <p>El reactor esta trabajando con normalidad</p>
    )
}

function FalloCatastrofico() {
    return (
    
        <p>Corium detectado, avisando autoridades. Repito, corium detectado la fusion es inminente. Todos los protocolos de alerta maxima quedan activados.</p>
    )
}

export {Alerta, Funcionando, FalloCatastrofico}