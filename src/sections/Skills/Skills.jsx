import React from 'react'
import styles from './SkilsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../assets/common/SkillList.jsx'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList  src={checkMarkIcon} skill='HTML'  />
        <SkillList  src={checkMarkIcon} skill='css'  />
        <SkillList  src={checkMarkIcon} skill='javascript'  />
        <SkillList  src={checkMarkIcon} skill='REACT JS'  />
      </div>

      <hr />

      <div className={styles.skillList}>
        <SkillList  src={checkMarkIcon} skill='PHP'  />
        <SkillList  src={checkMarkIcon} skill='PYTHON'  />
        <SkillList  src={checkMarkIcon} skill='SQL'  />
        <SkillList  src={checkMarkIcon} skill='MONGO DB'  />
        <SkillList  src={checkMarkIcon} skill='LARAVEL'  />
      </div>


      <hr />

<div className={styles.skillList}>
  <SkillList  src={checkMarkIcon} skill='GIT'  />
  <SkillList  src={checkMarkIcon} skill='FIGMA'  />
  <SkillList  src={checkMarkIcon} skill='TAILWIND'  />
  <SkillList  src={checkMarkIcon} skill='Bootstrap 5'  />

</div>

    </section>
  )
}

export default Skills
