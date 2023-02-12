import { useEffect, useRef, useState } from 'react';

import { Footer } from 'components/Footer';
import { Intro } from 'layouts/Home/Intro';
import { Meta } from 'components/Meta';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import gamestackTexture from 'assets/project2_2.png';
import gamestackTexture2 from 'assets/project2.png';
import gamestackTexture2Large from 'assets/project2.png';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTextureLarge from 'assets/project2_2.png';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import sprTexture from 'assets/kismet_events_wallpaper_small.png';
import sprTextureLarge from 'assets/kismet_events_wallpaper_large.png';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import styles from './Home.module.css';

const disciplines = ['Full-Stack', 'Front-end', 'Web3', 'ML', '3D', 'Game'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer + FullStack"
        description="Portfolio of Mateo Zapata — a Developer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing the future of Events"
        description="Designing and developing a platform and framework to help anyone to organize, host and sponsor events"
        buttonText="View Website"
        buttonLink="https://kismetevents.xyz"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Superfunland"
        buttonText="View website"
        buttonLink="https://www.superfunland.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
