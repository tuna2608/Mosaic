import {styled} from 'styled-components'

export const Header = styled.div`
    background-color: white;
    width: 100%;
    height: 80px;
    // position: fixed;
`

export const HeaderContent = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 135px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    font-size: 14px;
    font-weight: bold;
    padding: 0px 20px;
`

export const LinkHeader = styled.a`
    text-decoration: none;
    color: black;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;

    &:hover{
        color: white;
        background-color: black;
    }
`
export const MenuItem = styled.div`
    
`


export const LinkNavbar = styled.a`
    font-size: 30px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    &:hover{
        color: white;
        background-color: black;
    }
`

export const NavBar = styled.div`
    display: flex;
    gap: 60px;
    margin-left: 60px;
`