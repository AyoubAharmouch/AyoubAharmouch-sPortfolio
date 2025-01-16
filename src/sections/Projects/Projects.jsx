import React from 'react'
import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/fitlift.png/'
import motor from '../../assets/motor.png/'
import adv from '../../assets/adv.png/'

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
  <h1 className="sectionTitle">Projects</h1>
  <div className={styles.projectsContainer}>
    <a target="_blank" href="https://github.com/AyoubAharmouch/GymTime">
      <img src={Viberr} className="hover" alt="fitness logo" />
      <h3>GymTime</h3>
      <p>Management of a Gym</p>
    </a>

    <a target="_blank" href="https://github.com/AyoubAharmouch/MotorShop">
      <img src={motor} className="hover" alt="motor logo" />
      <h3>Bikerster</h3>
      <p>Motorcycle Accessories E-Commerce Platform</p>
    </a>

    <a target="_blank" href="https://ayoubaharmouch.github.io/MiniProjet/">
      <img src={adv} className="hover" alt="adventure logo" />
      <h3>Take a Step</h3>
      <p>Adventure Exploration in Morocco</p>
    </a>
  </div>
</section>

  )
}
