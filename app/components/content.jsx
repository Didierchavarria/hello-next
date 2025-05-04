"use client";

import React from "react";

export default function Content({ elementoActivoHijo = 1 }) {
  return (
    <div className="p-4 text-center">
      { elementoActivoHijo === 1 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">Descripcion sobre mi</h1>
                  <p className="text-sm text-gray-700 dark:text-gray-200"> </p>


        <h2 className="text-center font-bold font-large text-1xl">Didie Daniel Chavarria Bermudez</h2>
        <p className="paragraph-description align-middle text-justify text-gray-700 dark:text-gray-200">
 HTML, CSS y JavaScript, que forman la base de toda interfaz web. Domino su uso para estructurar, 
estilizar e interactivar páginas de manera efectiva.
Vue.js, un framework progresivo de JavaScript que utilizo 
para construir interfaces de usuario dinámicas y escalables. Tengo experiencia creando componentes reutilizables,
manejando estados y trabajando con el enrutamiento y el ciclo de vida de la aplicación.
Integración de APIS, donde conecto interfaces con 
servicios externos para consumir datos en tiempo real y mejorar la funcionalidad de las aplicaciones.

Diseño responsivo, asegurándome de que las aplicaciones se vean y funcionen correctamente en todo tipo de dispositivos
        </p>
        </div>)
            }
      
            { elementoActivoHijo === 2 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">Experiencia #2</h1>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    <p>He trabajado en varios proyectos vasados en react, next y vercel</p>
                  </p>
                </div>)
            }
      
            { elementoActivoHijo === 3 &&
                (<div className="max-w-lg">
                  <h1 className="text-4xl font-extrabold mb-4">Contacto #3</h1>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    <a href="https://github.com/Didierchavarria/hello-next " target="_blank">Link de github</a>
                    <a href="https://www.linkedin.com/mwlite/profile/in/didier-chavarria-bermudez-53b886345/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BsOOseaA2RWCJgyNHE8dfrA%3D%3D
LinkedIn" target="_blank">Link de linkedin</a>
                  </p>
                </div>)
            }
    </div>
  );
}