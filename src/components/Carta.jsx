
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

Hoy quiero tomar un momento para expresarte todo el amor y la gratitud que siento hacia ti. En este día especial, quiero recordarte lo increíble que eres y lo afortunado que me siento de tenerte como madre.

Desde el momento en que nací, has estado a mi lado, guiándome, apoyándome y amándome incondicionalmente. Tus sacrificios, tu dedicación y tu fuerza han sido una inspiración para mí en cada paso de mi vida.

Recuerdo cómo, incluso en los momentos más difíciles, siempre encontrabas una manera de hacerme sonreír y sentirme seguro. Tu amor ha sido mi refugio en las tormentas, y tu sabiduría ha sido mi guía en los momentos de confusión.

Mamá, quiero que sepas que valoro cada momento que hemos compartido juntos, desde nuestras conversaciones profundas hasta nuestras risas contagiosas. Cada recuerdo está grabado en mi corazón para siempre.

Hoy, en este día especial, quiero recordarte lo especial que eres para mí. Eres mi roca, mi confidente y mi mejor amiga. No hay palabras suficientes para expresar lo agradecido que estoy de tenerte en mi vida.

Gracias por ser la mejor mamá que alguien podría pedir. Te quiero más de lo que las palabras pueden expresar.

Con todo mi amor.
Atte. Jeremy TU hijo Mayor  
</p>
) : ( // Si la carta no está abierta, mostrar el botón para abrir la carta
<button className="button-1" onClick={handleOpen}>Haz click para abrir la carta</button>
)}
            </div>
        </div>
    )
}
