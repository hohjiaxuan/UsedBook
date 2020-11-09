import styled from 'styled-components';
import logoPic from '../../img/logo.png';

export const HeaderWrapper = styled.div`
    height: 65px;
    background-color: #2a0101;
    color: #fc9f4d;
`;

export const Nav = styled.div`
    &.navigation{
        font-size: 1.4em;
        color: #fc9f4d;
        &:hover { color: white; }
    }
        
    &.menu{
        color: #2a0101;
        &:hover { color: white; }; 
    }
`;

export const NavItem = styled.div`
    line-height: 58px;
    padding: 0 15px;
    font-size: 17px; 
    &:hover { color: white; }
    &.left{
        float: left;
    }
    &.right{
        float: right;
    }
    &.active{
        color: #ea6f5a;
    }
`;

 export const Navbar = styled.div`
     background-color: yellow; 
 `;

export const NavSearch = styled.input.attrs ({
    placeholder: '搜索'
})`
    width: 385px;
    height: 40px;
    padding: 0 20px;
    margin-top: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #fc9f4d;
    font-size: 15px;
    &::placeholder {
        color: white;
    }
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url (${logoPic});
    background-size: contain;
`;

export const NavLink = styled.div`
background-color: #FFFFFF; 
`;

// export const Item = styled(Link)`
//     line-height: 26px;
//     font-size: 15px;
//     text-decoration: none;
//     color: black;
//     align-items: center;
//     display: flex;
// `;
