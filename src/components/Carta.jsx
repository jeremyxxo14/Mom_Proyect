
import React, { useState } from "react";

export default function Carta() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si la carta está abierta

  const handleOpen = () => {
    setIsOpen(true); // Función para abrir la carta
  };


    return (
        <div className="fondo-generalc">
            <div className="carta">
            {isOpen ? ( // Si la carta está abierta, mostrar el texto
            
                <p>Querida mamá,

                Quiero tomar un momento para expresarte todo el 
                amor y la gratitud que siento hacia ti. Quiero recordarte lo 
                increíble que eres y 
                lo afortunado que me siento de tenerte como madre.
                Desde el momento en que nací, has estado a mi lado, 
                guiándome, apoyándome y amándome incondicionalmente. 
                Tus sacrificios, tu dedicación y tu fuerza han sido una 
                inspiración para mí en cada paso de mi vida.
                Tu amor ha sido mi refugio en las tormentas, y tu sabiduría 
                ha sido mi guía en los momentos de confusión.
                Mamá, quiero que sepas que valoro cada momento que hemos 
                compartido juntos, desde nuestras conversaciones profundas 
                hasta nuestras risas. Cada recuerdo está grabado 
                en mi corazón para siempre.
                Hoy, en este día especial, quiero recordarte lo especial 
                que eres para mí. Eres mi inspiración para seguir adelante. 
                No hay palabras suficientes para expresar lo agradecido que estoy 
                de tenerte en mi vida.
                Gracias por ser la mejor mamá que alguien podría pedir. 
                Te quiero más de lo que las palabras pueden expresar.
                Con todo mi amor. Estoy muy orgulloso de ti y de todo lo que has logrado. 
                <p>Atte. Jeremy TU hijo Mayor </p>
                </p>
                        ) : ( // Si la carta no está abierta, mostrar el botón para abrir la carta
                        <>
                        <p>Estoy lleno de orgullo y felicidad al verte navegar en 
                          este mundo digital hecho por mi!!. Has logrado iniciar sesión!!, 
                          ahora puedes interactuar con esta pequeña pagina que ire actualizando ♥. </p> 

                          <p>Gracias por ser la mejor mamá que alguien podría pedir.Es un pequeño 
                            gesto para expresar cuánto te valoro y cuánto significas para mí. </p>

                            <p>Al hacer click en el boton de abajo podras acceder a 
                          una carta que escribi para ti 
                          Espero que al leerla, puedas sentir todo 
                          el amor y la gratitud que he querido transmitirte.
                          Además, puedes 
                          acceder a una pequeña galería de fotos a través del botón del menú. 
                          Son recuerdos que atesorarás y que quiero compartir contigo. 
                          Cada foto es un testimonio de los momentos especiales que hemos Vivido.</p>
                        
                        <button className="button-1" onClick={handleOpen}>Haz click para abrir la carta</button>
                        </>
                      )}
            </div>
        </div>
    )
}
