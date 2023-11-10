import styles from './style.module.css'
import Titulo from '../Titulo'
import SecaoPerfil from './SecaoPerfil'
import Botoes from '../Botoes'

export default function Profile({ avatar, nome, bio, email, fone, githubUrl, linkedinUrl, twitterUrl }) {
    return (
        <div className={styles.container}>
            <img src={avatar} alt={nome} />
            <Titulo>{nome}</Titulo>
            <SecaoPerfil>{bio}</SecaoPerfil>
            <SecaoPerfil>{fone}</SecaoPerfil>
            <SecaoPerfil>{email}</SecaoPerfil>
            <SecaoPerfil>
                <Botoes>
                    <a href={githubUrl} target='_blank'>GitHub</a>
                    <a href={linkedinUrl} target='_blank'>Linkedn</a>
                    <a href={twitterUrl} target='_blank'>Twitter</a>
                </Botoes>
            </SecaoPerfil>            
        </div>
    )
}