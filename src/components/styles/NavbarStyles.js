import styled from 'styled-components';

const NavbarStyles = styled.div`
  margin: 16px;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    padding: 16px;
    li {
      cursor: pointer;
      text-transform: uppercase;
      padding: 16px;
    }
  }
  .hamburger {
      display: none;
      font-size: 16px;
      cursor: pointer;
    }
  @media (max-width: 720px){
    margin: 1rem auto;
    justify-content: space-between;
    width: 80vw;
    ul {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

export default NavbarStyles;
