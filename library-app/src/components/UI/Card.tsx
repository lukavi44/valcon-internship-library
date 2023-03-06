import styles from './Card.module.css'

export interface ICard {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const Card = ({ children }: any) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
