import React from 'react'
import styles from '../About/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>About us</h1>
          <div className={styles.text}>
              <p className={styles.text}>
                We are a group of dedicated programmers who enjoy working as a team. During this experience we learned a lot about programming and about communication and working together.
              </p>
          </div>
      </div>
        
        <h1 className={styles.title}>Our Team</h1>
          <div className={styles.teamsContainer}>
            <div className={styles.box}>
              <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/D4D35AQG0Ff8fe5EFHw/profile-framedphoto-shrink_200_200/0/1664543314586?e=1668877200&v=beta&t=ZM_1fRC9kR_AsGB-p0H53PTDg15NgRyNw6quTRr0ZNc'/>
              </div>
              <div className={styles.infoBox}>
                <h3>Luciano Paniccia</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/D4E35AQEmu8vMzXD0vg/profile-framedphoto-shrink_200_200/0/1666981054470?e=1668877200&v=beta&t=9Z2J2hm82xO9Zw5xndgYZGN02D-z1AJ7On_Rm6wlOYA'/>
                <h3>Sebastian Prado Escobar</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/D4D35AQFhSgnc8xSdtA/profile-framedphoto-shrink_200_200/0/1667352021537?e=1668877200&v=beta&t=ubUTMNsDBVKXCVh6_OyteM0mvRoW26bgxorq6XBPBWU'/>
                <h3>Valentin Morardo</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/D4E03AQFSZBhvUk8J6w/profile-displayphoto-shrink_200_200/0/1661831642590?e=1673481600&v=beta&t=voOglWcGfrt_tux1pSES8JORxF8_bbxMFznUbAhvTWg'/>
                <h3>Bryan Francisco  Millon Ojeda</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/C4E03AQFt1ZKcx8k7Jw/profile-displayphoto-shrink_200_200/0/1624726135332?e=1673481600&v=beta&t=FccVpKGSN0qSWQtZ0LVPhgRe_f5-TMPz0xi0cW1pcUM'/>
                <h3>Mauro Sergio Damian Ferrera</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/C4E03AQErx0bBN0gzVA/profile-displayphoto-shrink_200_200/0/1567744420647?e=1673481600&v=beta&t=1Ekpe1yRlnYQ17lMfKBe1TWUbxpqWGzqPnQa7VB9IhQ'/>
                <h3>Santiago Gabriel Acuña</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
                  <a href='https://www.linkedin.com/in/santiago-gabriel-acu%C3%B1a-40a116190/' target="_blank">
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
                </span>
              </div>
            </div>
            <div className={styles.box}>
            <div>
                <img className={styles.imgBox} alt="team" src='https://media-exp1.licdn.com/dms/image/C4D03AQFM0o5cWQ8W4w/profile-displayphoto-shrink_200_200/0/1647369973219?e=1673481600&v=beta&t=SuTfLynBvhe96-eUilG2SjHlGZ98kXrHsUPW_5hNoSY'/>
                <h3>Braian Denis Gomez</h3>
                <h4>Full-Stack Developer</h4>
                <span className='links-container'>
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
                </span>
              </div>
            </div>
            </div>
          </div>
  )
}

export default About;