import React, { useEffect, useState } from 'react'
import search from '../../assets/icons/search.png'
import styles from './Search.module.css'
import sort from '../../assets/icons/sort.png'

const Search = () => {
  const [position, setPosition] = useState(window.scrollY)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY
      setIsVisible(position > moving)
      setPosition(moving)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [position, isVisible])

  return (
    <React.Fragment>
      <div className={styles['search-holder']} style={{ display: isVisible ? 'flex' : '' }}>
        <input type='search' name='search' id='search' className={styles.input} />
        <button className={styles['search-btn']}>
          <img src={search} alt='' className={styles['search-img']} />
        </button>
        <button className={styles.sort}>
          <img src={sort} alt='' />
        </button>
      </div>
    </React.Fragment>
  )
}

export default Search
