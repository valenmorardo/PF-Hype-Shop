import React from "react";
import { Link } from "react-router-dom";
import styles from "../About/About.module.css";

const About = () => {
  return (
    <>
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Miembros del equipo
        </h1>
        <br/>
        <h2 className="text-base font-bold text-indigo-600">
        Somos un grupo de programadores dedicados que disfrutan trabajar en equipo. Durante esta experiencia aprendimos mucho sobre programación y sobre comunicación y trabajo conjunto.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQG0Ff8fe5EFHw/profile-framedphoto-shrink_400_400/0/1664543314586?e=1670191200&v=beta&t=d66ABWurNxEwEAEZy2_Ykqx107o2y-3BVfbDe-XJq-8"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Luciano Paniccia</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/luciano-paniccia-847868232/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/Luciano-Paniccia-Git' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src='https://media-exp1.licdn.com/dms/image/D4E35AQEmu8vMzXD0vg/profile-framedphoto-shrink_400_400/0/1666981054470?e=1670191200&v=beta&t=EMfOD7V-4lQw6f5sRfGksniVjRMMiYXfac9j9ReG8UQ'
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Sebastian Prado Escobar</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/sebastian-prado-escobar-dev/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/sebas-pr2000' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQHYxvn17zbAkQ/profile-framedphoto-shrink_400_400/0/1669254200611?e=1670191200&v=beta&t=Nq2qgxdwcabBRGo-CIUbTw_CGknhOQfkZKEoxEliU00"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Valentin Morardo</p>
            <p className="text-base text-gray-400 font-normal">Full-Stack Developer</p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/valentin-morardo-b125ba240/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/Littyfever' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/D4E03AQFSZBhvUk8J6w/profile-displayphoto-shrink_200_200/0/1661831642590?e=1673481600&v=beta&t=voOglWcGfrt_tux1pSES8JORxF8_bbxMFznUbAhvTWg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Bryan Millon Ojeda</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/bryan-mill%C3%B3n/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/BryanMillon' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFt1ZKcx8k7Jw/profile-displayphoto-shrink_200_200/0/1624726135332?e=1673481600&v=beta&t=FccVpKGSN0qSWQtZ0LVPhgRe_f5-TMPz0xi0cW1pcUM"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Mauro Sergio Damian Ferrera</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/damian-f/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/damianf2022' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQErx0bBN0gzVA/profile-displayphoto-shrink_200_200/0/1567744420647?e=1673481600&v=beta&t=1Ekpe1yRlnYQ17lMfKBe1TWUbxpqWGzqPnQa7VB9IhQ"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Santiago Gabriel Acuña</p>
            <p className="text-base text-gray-400 font-normal">
            Full-Stack Developer
            </p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/santiago-gabriel-acu%C3%B1a-894ba9256/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/Deplover09' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded-full h-36 w-36"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFM0o5cWQ8W4w/profile-displayphoto-shrink_200_200/0/1647369973219?e=1673481600&v=beta&t=SuTfLynBvhe96-eUilG2SjHlGZ98kXrHsUPW_5hNoSY"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">Braian Denis Gomez</p>
            <p className="text-base text-gray-400 font-normal">Full-Stack Developer</p>
            <div className={styles.icons}>
                  <a href='https://www.linkedin.com/in/braigomez/' target="_blank">
                    <img
                    src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                  <a href='https://github.com/braaidg' target='_blank'>
                    <img
                    src='https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png'
                    alt=''
                    width='20px'
                    height='20px'
                    className={styles.icon}
                    />
                  </a>
                </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
