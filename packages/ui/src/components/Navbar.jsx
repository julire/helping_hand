import { MainNav, NavLi, NavLink, StyledContainer } from '../index';

export function Navbar() {
  return (
    <StyledContainer variant="NavWrapper">
      <MainNav>
        <NavLi>
          <NavLink href="/">
            <span className="material-symbols-outlined">home</span>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/add-project">
            <span className="material-symbols-outlined">add</span>
          </NavLink>
        </NavLi>
      </MainNav>
    </StyledContainer>
  );
}
