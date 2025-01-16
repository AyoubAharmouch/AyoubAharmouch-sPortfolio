import React from 'react'

function ProjectsCard() {
  return (
    <div>
      <section id='projects'  className={styles.container}>
            <h1 className='sectionTitle'>Projects </h1>
            <div className={styles.projectsContainer}>
              <a target='_blank' href="https://github.com/AyoubAharmouch/GymTime">
                  <img src={Viberr} className='hover' alt="fitness logo" />
                  <h3>GymTime</h3>
                  <p>Management of a Gym</p>
              </a>
            </div>
      
            <div className={styles.projectsContainer}>
              <a target='_blank' href="https://github.com/AyoubAharmouch/MotorShop">
                  <img src={motor} className='hover' alt="motor logo" />
                  <h3>Bikerster</h3>
                  <p>Motorcycle Accessories E-Commerce Platform</p>
              </a>
            </div>
      
            <div className={styles.projectsContainer}>
              <a target='_blank' href="https://ayoubaharmouch.github.io/MiniProjet/">
                  <img src={adv} className='hover' alt="adventure logo" />
                  <h3>Take a step</h3>
                  <p>Adventure Exploration in Morocco</p>
              </a>
            </div>
      
          
          </section>
    </div>
  )
}

export default ProjectsCard
