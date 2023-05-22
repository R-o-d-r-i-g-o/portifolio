import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 30;
  top: 0;
`;

export const Separator = styled.hr`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Clink = styled.div`
  width: 40px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
`;

export const List = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  
  top: 60px;
  width: 288px;
  row-gap: 24px;
  right: ${props => props.active ? '0' : '-288px'};
  padding: 24px 16px;
  transition: all 0.2s;
  padding-top: 40px;
  background: transparent;
  min-height: calc(100vh - 60px);

  @media screen and (min-width: 768px) {
    position: unset;
    flex-direction: row;
    
    min-height: fit-content;
    width: fit-content;
    column-gap: 24px;
    align-items: center;
  }
`;

export const Item = styled.div`
  font-size: 18px; 
  margin: 0 auto;
  position: relative;
  transition: all 0.2s;

  :hover{
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    :before {
      content: '';
      position: absolute;
      width: 0%;
      height: 6px;
      bottom: -16px;
      left: 0;
      background-color: black;
      transition: all 0.2s;

      :hover {
        width: 100%;
      }
    }
  }
`;