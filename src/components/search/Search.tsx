import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles['search-base']}>
      <div className={styles['field-1']}>
        <img className={styles['search-ico']} src='https://img.icons8.com/?size=100&id=59878&format=png&color=8B8E9C' alt='search-ico'/>
        <input type="search" className={styles["search-doc"]} placeholder="Condition, procedure, speciality..."/>
      </div>
      <div className={styles['field-2']}>
        <img className={styles['location-ico']} src='https://img.icons8.com/?size=100&id=7880&format=png&color=8B8E9C' alt='location-ico'/>
        <input type="location" className={styles["search-doc"]} placeholder="Condition, procedure, speciality..."/>
      </div>
    </div>
  )
}

export default Search