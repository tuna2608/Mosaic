
import styled from 'styled-components'

export const BannerContent = styled.div`
    // margin-top: 80px;
    position: relative;
`
export const ImageBanner = styled.img`

    width: 100%;
`

export const ButtonBanner = styled.a`
    position: absolute;
    border-radius: 80px;
    width: 273px;
    height: 87px;
    left: 583.5px;
    top: 530px;
    font-weight: bold;
    border: none;
    background-color: var(--orange);
    color: black;

    &:hover {
        color: white;
        background-color: black;
    }
`

export const ButtonBannerText = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: 30px;
`