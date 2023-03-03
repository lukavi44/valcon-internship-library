import React from 'react'
import search from '../../assets/icons/search.png'
import styles from './Search.module.css'

const Search = () => {
  return (
    <React.Fragment>
      <div className={styles['search-holder']}>
        <input type='search' name='search' id='search' className={styles.input} />
        <button className={styles['search-btn']}>
          <img src={search} alt='' className={styles['search-img']} />
        </button>
      </div>
    </React.Fragment>
  )
}

export default Search
