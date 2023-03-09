import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const portalDiv = document.getElementById('portal') as HTMLElement

const Modal = ({ open, children, onClose }: any) => {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <button onClick={onClose} className={styles['modal-close-btn']} type='submit'>
          close
        </button>
        {children}
      </div>
    </>,
    portalDiv,
  )
}

export default Modal
