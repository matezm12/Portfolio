import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';

import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Fragment } from 'react';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import dynamic from 'next/dynamic';
import styles from './VolkiharKnight.module.css';
import volkiharBackground from 'assets/3dwallpaper_animated.gif';
import volkiharBackgroundLarge from 'assets/3dwallpaper_animated.gif';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import volkiharEnderalLarge from 'assets/3dwallpaper_small.jpg';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';

const Armor = dynamic(() => import('./Armor').then(mod => mod.Armor));


const title = '3D Development and Design';
const description =
  'Here is a collection of some 3D Models I have worked on but also a bit more of the topics I enjoy:';
const roles = ['3D Modelling', 'Texturing', 'Graphic Design', 'Game Development'];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[volkiharBackground, volkiharBackgroundLarge]}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />


        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Armor alt="3D model of the Volkihar Knight armor" />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>3D & Game </ProjectSectionHeading>
              <ProjectSectionText>
                Growing up I always enjoyed deconstructing things to understand them
                and also to learn the process of how things were first made. Games were
                one of the things I wanted the most for their intrinsic complexity.
              </ProjectSectionText>
              <ProjectSectionText>
                Two of the things I enjoyed the most were, Games and Anime;
                this is where I take some inspiration for a lot of my work
                also when I connect 3D worlds with typical web.
                My favorite genres are Fantasy, Sci-fi, and Cyberpunk.
              </ProjectSectionText>
              <ProjectSectionText>
                Understanding all the fundamentals that games need to be created,
                (Frontend, Backend, AI, Design, Sound Design, etc.) are huge factors That
                helped me to learn most of my development.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>



        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="Neo-city image"
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              {/** 
              <Image
                srcSet={[volkiharEnderalLogo, volkiharEnderalLogoLarge]}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              */}
              <ProjectSectionHeading>Featured</ProjectSectionHeading>
              <ProjectSectionText>
                I am always ultra excited to talk to different people about their ideas
                and if there is any alignment, possibly work together in many of them, or even
                if its just to communicate about anything. I will also have a little blog,
                articles page that will be open to anyone who wants to contribute to it or just
                to share something.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://t.me/matezm12"
              >
                Contact me
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
