import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>Sergio Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='28 de Setembro às 09:00h' dateTime='2024-09-28 09:00:05'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera </p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento gratuito da Rocketseat</p>
                <p><a href="">ananda.design/douctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '} 
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}