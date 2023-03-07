import styles from './Card.module.css'

export interface ICard {
  children: React.ReactNode
}

const Card = ({ children }: React.PropsWithChildren<ICard>) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
