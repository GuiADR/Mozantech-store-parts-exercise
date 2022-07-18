import React, { useContext } from 'react';
import Switch from 'react-switch';
import { MdLightMode, MdDarkMode, MdHome } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container, StyledLink } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <StyledLink to="/">
        <MdHome size={26} />
      </StyledLink>
      <h1>Store Parts</h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        onColor={colors.secondary}
        offColor={shade(0.2, colors.secondary)}

        checkedIcon={
          <MdLightMode
            style={{
              height: '90%',
              width: '90%',
              position: 'relative',
              top: '5%',
              left: '5%'
            }}
          />
        }
        uncheckedIcon={
          <MdDarkMode
            style={{
              height: '90%',
              width: '90%',
              position: 'relative',
              top: '5%',
              left: '5%'
            }} />
        }

      />
    </Container>
  );
}

export default Header;