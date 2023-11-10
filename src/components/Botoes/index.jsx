import styles from './style.module.css'

export default function Botoes({ children }) {
    return (
        <div className={styles.buttons}>
            {children}
        </div>
    )
}