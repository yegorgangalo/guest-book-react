import styles from './CommentItem.module.css'

const CommentItem = function({name, comment}) {
    return (
        <li className={styles.commentBlock} >
            <p className={styles.name} >{name}:</p>
            <p className={styles.comment} >{comment}</p>
        </li>
    )
}

export default CommentItem;