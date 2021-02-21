import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Jason and I’m a Web Developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>About Me</h1>
          <p>
            Currently, I am a senior at Temple Univeristy majoring in Managemnet Information Systems. I have extensive
            experience with HTML5, JavaScript, CSS, SCSS, React.js and Python. I am interested in software development
            that helps make the world a better place.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
