import React from 'react'
import { BannerContent, ButtonBanner, ButtonBannerText, ImageBanner } from './style'
import banner from '../../assets/images/banner.png'

const BannerComponent = () => {
  return (
    <BannerContent>
        <ImageBanner src={banner} alt="banner"/>
        <ButtonBanner href="/">
            <ButtonBannerText>Shop now</ButtonBannerText>
        </ButtonBanner >
    </BannerContent>
  )
}

export default BannerComponent
