import styles from './style.module.css'
import Titulo from '../Titulo'
import SecaoPerfil from './SecaoPerfil'
import Botoes from '../Botoes'
import {useState} from 'react'

export default function Profile({ avatar, nome, bio, email, fone, githubUrl, linkedinUrl, twitterUrl }) {

    // valor, funcao modificadora
    const [seguir, setSeguir] = useState('Seguir')

    function cliqueBotao(ev) {
        alert(`Você começou a seguir ${nome}`)
        setSeguir('Seguindo')
    }

    return (
        <div className={styles.container}>
            <img src={avatar} alt={nome} />
            <Titulo>
                {nome}
                <button onClick={cliqueBotao}>{seguir}</button>
            </Titulo>
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