import React from "react";
import "./style.css";

export const Slide = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="slide">
      {/* Header / Navigation */}
      <header className="header">
        <div className="text-wrapper">Portafolio</div>

        <nav className="nav-wrapper" aria-label="Main navigation">
          <button className="nav-link" onClick={() => scrollTo("proyectos")}>Proyectos</button>
          <button className="nav-link" onClick={() => scrollTo("servicios")}>Servicios</button>
          <button className="nav-link" onClick={() => scrollTo("sobre-mi")}>Sobre mi</button>
        </nav>

        <div className="line" />
      </header>

      {/* Proyectos section */}
      <section id="proyectos" className="proyectos-section">
        <div className="years-container">
          <article className="year-item">
            <h3 className="text-wrapper-4">2023</h3>
            <p className="chacami-n-en">
              Chacamión <br />
              En 2023 realicé un proyecto llamado Chacamión, que consistió en diseñar
              y construir un auto a control remoto desde cero. El trabajo abarcó todas
              las etapas: desde la planificación y el armado de los componentes
              electrónicos hasta la programación del sistema de control. Este proyecto
              me permitió desarrollar habilidades técnicas, creatividad y resolución
              de problemas aplicadas a la ingeniería y la tecnología.
            </p>
            <img
              className="ebfb-fd"
              alt="Chacamión"
              src="https://c.animaapp.com/381XIFDM/img/e41bf22b-3fd3-4842-b3af-3c9618029cae-4-5005-c-1@2x.png"
            />
          </article>

          <article className="year-item">
            <h3 className="text-wrapper-5">2024</h3>
            <p className="p">
              En 2024 desarrollé Mano en Mano, un proyecto que más adelante evolucionó
              en EntreNosotros. La idea surgió como una iniciativa solidaria para
              conectar personas que quisieran ayudar con quienes más lo necesitaban,
              de forma simple y cercana. Fue mi primer acercamiento a crear una
              plataforma con propósito social, combinando diseño, empatía y
              tecnología.
            </p>
            <img
              className="screenshot"
              alt="Mano en Mano"
              src="https://c.animaapp.com/381XIFDM/img/screenshot-2025-10-31-at-8-00-43-am-1@2x.png"
            />
          </article>

          <article className="year-item">
            <h3 className="text-wrapper-6">2025</h3>
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
              alt="EntreNosotros"
              src="https://c.animaapp.com/381XIFDM/img/image-1@2x.png"
            />
          </article>
        </div>
      </section>

      {/* Servicios section */}
      <section id="servicios" className="servicios-section">
        <h2 className="text-wrapper-8">Servicios</h2>
        <div className="servicios-line" />
        <p className="estabilidad">
          • estabilidad, escalabilidad y eficiencia.
          <br />
          • Integración de bases de datos y APIs: Implemento y optimizo conexiones
          entre sistemas, gestionando el flujo de datos con seguridad y rendimiento.
          <br />
          • Automatización y optimización de procesos: Creo soluciones que mejoran
          la eficiencia del servidor, reducen tiempos de respuesta y simplifican
          tareas repetitivas.
          <br />
          • Desarrollo de servidores y lógica de negocio: Programo el núcleo
          funcional de proyectos digitales, asegurando una comunicación fluida
          entre el front end y los datos.
          <br />
          • Gestión y despliegue en entornos productivos: Trabajo con buenas
          prácticas de versionado, testing y deployment para garantizar que cada
          aplicación funcione de forma confiable y profesional.
        </p>
      </section>

      {/* Sobre mi section */}
      <section id="sobre-mi" className="sobre-mi-section">
        <h2 className="text-wrapper-10">Sobre mi</h2>
        <div className="sobre-mi-line" />
        <div className="profile-container">
          <img
            className="element"
            alt="Facundo Braslavsky"
            src="https://c.animaapp.com/381XIFDM/img/81bb9e92-ef2c-41f4-9cbd-9c739b88a19f-4-5005-c-1@2x.png"
          />
          <div className="profile-info">
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
          </div>
        </div>
      </section>
    </div>
  );
};
