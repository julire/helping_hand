import { StyledContainer, MainNav, NavLi } from 'ui';
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
              <span className="material-symbols-outlined">home</span>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/add-project">
              <span className="material-symbols-outlined">add</span>
            </Link>
          </NavLi>
        </MainNav>
      ) : null}
    </StyledContainer>
  );
}
