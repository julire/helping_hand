import { StyledContainer, MainNav, NavLi, NavItem } from 'ui';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <StyledContainer variant="NavWrapper">
      <MainNav>
        <NavLi>
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/add-project">
            <span className="material-symbols-outlined">add</span>
          </Link>
        </NavLi>
      </MainNav>
    </StyledContainer>
  );
}
