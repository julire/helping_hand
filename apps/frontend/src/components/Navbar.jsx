import {
  StyledContainer,
  MainNav,
  NavLi,
  StyledHomeIcon,
  StyledAddIcon,
} from 'ui';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ButtonMailto } from './ButtonMailto';

export function Navbar() {
  return (
    <StyledContainer variant="NavWrapper">
      <MainNav>
        <NavLi>
          <Link to="/">
            <StyledHomeIcon size="35" />
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/add-project">
            <StyledAddIcon size="35" />
          </Link>
        </NavLi>
      </MainNav>
    </StyledContainer>
  );
}
