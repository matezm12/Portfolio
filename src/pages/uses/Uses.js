import { List, ListItem } from 'components/List';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';

import { Footer } from 'components/Footer';
import { Fragment } from 'react';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import styles from './Uses.module.css';
import usesBackground from 'assets/uses-background.mp4';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Uses"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive  list of tools, Software, hardware, and more that I use on a daily basis to plan, design and code."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design.
                  </ListItem>
                  <ListItem>
                    Any basic motion graphics I create for web are coded in libraries such as Anime.js and
                    with the usage of advanced functions of Canvas (HTML), allowing to bring more advanced frameworks and libraries
                    in a lightweight manner. But my main focus is to bring the power of 3D to a more easy way of using, transforming
                    the 2D world into a mixture of 3D with Three.js, Webgl, this also allows me
                    to create much more creative and magical experiences to web with everything being ultra-lightweight.
                    For more advanced 3D Animations, I implement animations from Unity and Adobe After Effects
                    . If anyone has
                    suggestions please <Link href="/contact">message me</Link>.
                  </ListItem>
                  <ListItem>
                    For any 3D models I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Or {' '}
                    <Link href="https://www.autodesk.com/products/3ds-max/">3DS Max (Autodesk)</Link>
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the One Dark Pro theme.
                  </ListItem>
                  <ListItem>
                    OPERA GX is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The modular-componen based model
                    made a lot more sense to me and I loved it. Improved it as well
                    with {" "} <Link href="https://nextjs.org">Next.js</Link> for
                    better rendering and improving performance on Websites.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. The learning curve
                    is a bit high, but once you get the hang of the basics, you can create
                    Incredible things with it. Then you can complement it with more advanced
                    animations with the usage of frameworks like Anime.js, GSAP and similars.
                  </ListItem>
                  <ListItem>
                    for basic CSS, I have been using vanilla CSS with{' '}
                    <Link href="https://postcss.org/">PostCSS</Link>. For easier and faster
                    development I work with <Link href="https://tailwindcss.com">Tailwind CSS</Link>{" "}
                    and for more complex structures that are more efficient with my Frontend Software of choice,
                    I like to use {" "} <Link href="https://chakra-ui.com">Chakra UI.</Link>
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to add spring animations to React and three.js.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>
                    .
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>CPU</TableHeadCell>
                    <TableCell>Intel(R) Core(TM) i9</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>MSI Optix MAG322CQP</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Razer BlackWidow V3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Viper Ultimate</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>MSI Prestige 15 A10SC</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>Steel Series Arctis Pro/Apple Airpods</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>Razer Seiren X</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
