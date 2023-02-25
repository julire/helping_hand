import {
  StyledContainer,
  MainNav,
  NavLi,
  StyledHomeIcon,
  StyledAddIcon,
} from 'ui';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <StyledContainer variant="NavWrapper">
      {path === '/' ? (
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
      ) : null}
    </StyledContainer>
  );
}
