import{FC} from "react";
import Title1Image from '../../image/title1.jpg';
import Title2Image from '../../image/title2.jpg';
import commentImage from '../../image/comment.jpg';
import styles from './styles.module.scss';

const ThirdSection:FC = () => {
    return (
        <div className={styles.thirdsection}>
            <img src={Title1Image} alt="Title 1" />
            <img className={styles.comment} src={commentImage} alt="Comment" />
            <img src={Title2Image} alt="Title 2" />
            <img className={styles.comment} src={commentImage} alt="Comment" />

        </div>
    )
}

export default ThirdSection;