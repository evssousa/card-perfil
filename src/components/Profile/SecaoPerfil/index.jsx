import styles from './style.module.css'

export default function SecaoPerfil( {children} ) {
    return (
        <div className={styles.secao}>{children}</div>
    )
}