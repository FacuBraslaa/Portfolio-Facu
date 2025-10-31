import React from "react";
import "./style.css";

export const Slide = () => {
  return (
    <div className="slide" data-model-id="4:70">
      {/* Anchors for navigation */}
      <div id="proyectos" style={{position: 'absolute', top: '350px', left: 0, width: '1px', height: '1px'}} />
      <div id="servicios" style={{position: 'absolute', top: '1219px', left: 0, width: '1px', height: '1px'}} />
      <div id="sobre-mi" style={{position: 'absolute', top: '2357px', left: 0, width: '1px', height: '1px'}} />
      <div className="text-wrapper">Portafolio</div>

      <img
        className="line"
        alt="Line"
        src="https://c.animaapp.com/381XIFDM/img/line-6.svg"
      />

      <div
        className="div"
        role="button"
        onClick={() =>
          document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Proyectos
      </div>

      <div
        className="text-wrapper-2"
        role="button"
        onClick={() =>
          document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Servicios
      </div>

      <div
        className="text-wrapper-3"
        role="button"
        onClick={() =>
          document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Sobre mi
      </div>

      <img
        className="img"
        alt="Line"
        src="https://c.animaapp.com/381XIFDM/img/line-4.svg"
      />

      <div className="text-wrapper-4">2023</div>

      <div className="text-wrapper-5">2024</div>

      <div className="text-wrapper-6">2025</div>

      <p className="chacami-n-en">
        Chacamión <br />
        En 2023 realicé un proyecto llamado Chacamión, que consistió en diseñar
        y construir un auto a control remoto desde cero. El trabajo abarcó todas
        las etapas: desde la planificación y el armado de los componentes
        electrónicos hasta la programación del sistema de control. Este proyecto
        me permitió desarrollar habilidades técnicas, creatividad y resolución
        de problemas aplicadas a la ingeniería y la tecnología.
      </p>

      <p className="p">
        En 2024 desarrollé Mano en Mano, un proyecto que más adelante evolucionó
        en EntreNosotros. La idea surgió como una iniciativa solidaria para
        conectar personas que quisieran ayudar con quienes más lo necesitaban,
        de forma simple y cercana. Fue mi primer acercamiento a crear una
        plataforma con propósito social, combinando diseño, empatía y
        tecnología.
      </p>

      <p className="text-wrapper-7">
        En 2025 continué el proyecto bajo el nombre EntreNosotros, una versión
        más completa y organizada de Mano a Mano. En esta nueva etapa
        incorporamos ideas innovadoras, como los viajes solidarios, que combinan
        tiempo y ayuda comunitaria. Además, formé un nuevo equipo de trabajo, lo
        que permitió mejorar la coordinación, la creatividad y la efectividad
        del proyecto. EntreNosotros se consolidó así como una plataforma
        solidaria más amplia, moderna y con verdadero impacto social.
      </p>

      <img
        className="image"
        alt="Image"
        src="https://c.animaapp.com/381XIFDM/img/image-1@2x.png"
      />

      <img
        className="screenshot"
        alt="Screenshot"
        src="https://c.animaapp.com/381XIFDM/img/screenshot-2025-10-31-at-8-00-43-am-1@2x.png"
      />

      <img
        className="ebfb-fd"
        alt="Ebfb fd"
        src="https://c.animaapp.com/381XIFDM/img/e41bf22b-3fd3-4842-b3af-3c9618029cae-4-5005-c-1@2x.png"
      />

      <p className="estabilidad">
        estabilidad, escalabilidad y eficiencia.
        <br />
        Integración de bases de datos y APIs: Implemento y optimizo conexiones
        entre sistemas, gestionando el flujo de datos con seguridad y
        rendimiento.
        <br />
        Automatización y optimización de procesos: Creo soluciones que mejoran
        la eficiencia del servidor, reducen tiempos de respuesta y simplifican
        tareas repetitivas.
        <br />
        Desarrollo de servidores y lógica de negocio: Programo el núcleo
        funcional de proyectos digitales, asegurando una comunicación fluida
        entre el front end y los datos.
        <br />
        Gestión y despliegue en entornos productivos: Trabajo con buenas
        prácticas de versionado, testing y deployment para garantizar que cada
        aplicación funcione de forma confiable y profesional.
      </p>

      <img
        className="line-2"
        alt="Line"
        src="https://c.animaapp.com/381XIFDM/img/line-5.svg"
      />

      <img
        className="ic-round-laptop"
        alt="Ic round laptop"
        src="https://c.animaapp.com/381XIFDM/img/ic-round-laptop.svg"
      />

      <img
        className="material-symbols"
        alt="Material symbols"
        src="https://c.animaapp.com/381XIFDM/img/material-symbols-star-1.svg"
      />

      <img
        className="mdi-design"
        alt="Mdi design"
        src="https://c.animaapp.com/381XIFDM/img/mdi-design.svg"
      />

      <img
        className="carbon-cics-program"
        alt="Carbon cics program"
        src="https://c.animaapp.com/381XIFDM/img/carbon-cics-program.svg"
      />

      <img
        className="material-symbols"
        alt="Material symbols"
        src="https://c.animaapp.com/381XIFDM/img/material-symbols-star-1.svg"
      />

      <img
        className="ic-round-laptop"
        alt="Ic round laptop"
        src="https://c.animaapp.com/381XIFDM/img/ic-round-laptop-1.svg"
      />

      <img
        className="carbon-cics-program"
        alt="Carbon cics program"
        src="https://c.animaapp.com/381XIFDM/img/carbon-cics-program-1.svg"
      />

      <img
        className="mdi-design"
        alt="Mdi design"
        src="https://c.animaapp.com/381XIFDM/img/mdi-design-1.svg"
      />

      <div className="text-wrapper-8">Servicios</div>

      <p className="text-wrapper-9">
        Hola, soy Facundo, tengo 17 años y me especializo en desarrollo backend.
        Me apasiona crear la estructura y la lógica que sostienen las
        aplicaciones digitales. En mi proyecto EntreNosotros, desarrollé la
        parte del servidor y la conexión con bases de datos para una plataforma
        solidaria que facilita donaciones y conecta a personas. Este proyecto me
        permitió aplicar buenas prácticas de arquitectura, integración de APIs y
        manejo de datos, fortaleciendo mi interés por construir soluciones
        tecnológicas que generen impacto social.
      </p>

      <div className="facundo-braslavsky">
        Facundo Braslavsky
        <br />
        17 años
      </div>

      <img
        className="line-3"
        alt="Line"
        src="https://c.animaapp.com/381XIFDM/img/line-6.svg"
      />

      <div className="text-wrapper-10">Sobre mi</div>

      <div className="rectangle" />

      <img
        className="element"
        alt="Element"
        src="https://c.animaapp.com/381XIFDM/img/81bb9e92-ef2c-41f4-9cbd-9c739b88a19f-4-5005-c-1@2x.png"
      />
    </div>
  );
};
