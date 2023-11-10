import styles from './style.module.css'

export default function Titulo( {children} ) {
    return (
        <h2 className={styles.titulo}>{children}</h2>
    )
}