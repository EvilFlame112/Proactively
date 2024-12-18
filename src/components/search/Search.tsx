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
        <input type="search" className={styles["location-doc"]} placeholder="City, state, or zipcode"/>
      </div>
      <div className={styles['field-3']}>
        <div className={styles['insurance-ico']}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 4.5V19.5H1.5V4.5H22.5ZM24 3H0V21H24V3Z" fill="#8B8E9C"/>
            <path d="M13.5 7.5H21V9H13.5V7.5ZM13.5 10.5H21V12H13.5V10.5ZM13.5 13.5H16.5V15H13.5V13.5ZM9.75 7.5C8.85 7.5 8.1 8.4 7.5 9C6.9 8.4 6.15 7.5 5.25 7.5C3 7.5 2.1 10.35 3.75 11.85L7.5 15L11.25 11.85C12.9 10.35 12 7.5 9.75 7.5Z" fill="#8B8E9C"/>
          </svg>
        </div>
        <input type="search" className={styles["insurance-doc"]} placeholder="Insurance carrier"/>
      </div>
      <div className={styles['field-4']}>
        <button className={styles['find-btn']}>
          <img className={styles['search-ico-w']} src='https://img.icons8.com/?size=100&id=59878&format=png&color=FFFFFF' alt='search-ico'/>
          Find Now
        </button>
      </div>
    </div>
  )
}

export default Search