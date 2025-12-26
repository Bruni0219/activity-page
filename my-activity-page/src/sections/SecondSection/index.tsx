import { FC, useEffect, useRef, useState } from 'react';
import CartoonImage from '../../image/cartoon.jpg';
import MovieImage from '../../image/movie.png';
import LifeImage from '../../image/life.jpg';
import FoodImage from '../../image/food.jpg';
import LogoImage from '../../image/logo.png';

import styles from './styles.module.scss';
import classNames from 'classnames';

const tabs = [
  {
    key: 'cartoon',
    title: '動畫',
    Image: CartoonImage,
  },
  {
    key: 'food',
    title: '美食',
    Image: FoodImage,
  },
  {
    key: 'movie',
    title: '電影',
    Image: MovieImage,
  },
  {
    key: 'life',
    title: '生活',
    Image: LifeImage,
  },
];

const TAB_HIGHT = 56;

const SecondSection: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon');
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const secondSectionRef = useRef<HTMLDivElement>(null);

  const activate = (key: string) => {
    setActiveTab(key);

    const tabContentEL = document.querySelector(`[data-id="${key}"]`);

    if (tabContentEL) {
      tabContentEL.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFixed(top <= 0);

      const secitionNodes = secondSectionRef.current.querySelectorAll('section');

      Array.from(secitionNodes).forEach((sectionEL) => {
        const { top } = sectionEL.getBoundingClientRect();
        const key = sectionEL.getAttribute('data-id') || '';

        if (top <= TAB_HIGHT) {
          setActiveTab(key);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      {/*Tabs */}
      <ul className={classNames({ [styles.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(styles.line, {
                [styles.visible]: activeTab === tab.key,
              })}
            />
          </li>
        ))}
      </ul>

      {/*Tab Content */}
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.Image} alt={tab.key} />
          </section>
        ))}
      </div>

      <div className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}>
        <img src={LogoImage} alt="LOGO" />

        <a href="https://www.bilibili.com/" target="_blank">
          <button>APP 內打開</button>
        </a>
      </div>
    </div>
  );
};

export default SecondSection;
