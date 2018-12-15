import styled from 'styled-components';

const NavbarStyles = styled.div`
  margin: 8px auto;
  width: 100%;
  height: auto;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: auto;
    list-style-type: none;
    display: flex;
    flex-grow: 2;
    justify-content: space-evenly;
    li {
      cursor: pointer;
      text-transform: uppercase;
    }
  }
  .hamburger {
      display: none;
      margin-right: 1rem;
      font-size: 16px;
      cursor: pointer;
    }
  @media (max-width: 720px){
    ul {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

export default NavbarStyles;
