import{FC,useState} from "react";
import CartoonImage from '../../image/cartoon.jpg';
import MovieImage from '../../image/movie.png';
import LifeImage from '../../image/life.jpg';
import FoodImage from '../../image/food.jpg';

import styles from './styles.module.scss';
import classNames from "classnames";

const tabs=[
    {
        key:'cartoon',
        title:'動畫'
    },
    {
        key:'food',
        title:'美食'
    },
    {
        key:'movie'
        ,title:'電影'
    },
    {
        key:'life',
        title:'生活'
    },
];
const SecondSection:FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon');
    return (
        <div className={styles.secondSection}>
            {/*Tabs */}
            <ul>
                {tabs.map(tab =>(
                    <li key={tab.key} onClick={()=>setActiveTab(tab.key)}>  
                        <span>{tab.title}</span>                        
                        <span className={classNames(styles.line,{[styles.visible]:activeTab===tab.key})} />
                    </li>
                ))} 
            </ul>
            
            {/*Tab Content */}
            <div>
                <section>
                    <h2>動畫</h2>
                    <img src={CartoonImage} alt='cartoon'/>
                </section>
                <section>
                    <h2>美食</h2>
                    <img src={FoodImage} alt='Food'/>
                </section>
                <section>
                    <h2>電影</h2>
                    <img src={MovieImage} alt='Movie'/>
                </section>
                <section>
                    <h2>生活</h2>
                    <img src={LifeImage} alt='Life'/>
                </section>
            </div>
        </div>
    )
}

export default SecondSection;