import { StyledContainer, MainNav, NavLi, NavLink } from 'ui';

export function Navbar() {
  return (
    <StyledContainer variant="NavContainer">
      <MainNav>
        <NavLi>
          <NavLink href="/">
            <span class="material-symbols-outlined">home</span>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="/add-project">
            <span class="material-symbols-outlined">add</span>
          </NavLink>
        </NavLi>
      </MainNav>
    </StyledContainer>
  );
}
