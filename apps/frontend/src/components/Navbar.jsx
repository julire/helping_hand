import { Bar, MainNav, NavLi, NavLink } from 'ui';

export function Navbar() {
  return (
    <Bar>
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
    </Bar>
  );
}
