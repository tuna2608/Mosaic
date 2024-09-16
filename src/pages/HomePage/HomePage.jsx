import React from "react";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import { HomeContent, HomeWrapper } from "./style";
import TopTypeProductComponent from "../../components/TopTypeProductComponent/TopTypeProductComponent";
import MostPopularComponent from "../../components/MostPopularComponent/MostPopularComponent";
import RightPopularComponent from "../../components/RightPopularComponent.jsx/RightPopularComponent";
import CenterPopularComponent from "../../components/CenterPopularComponent/CenterPopularComponent";

const HomePage = () => {
  return (
    <HomeWrapper>
      <BannerComponent />
      <HomeContent>
        <TopTypeProductComponent />
        <MostPopularComponent />
        <RightPopularComponent />
        <CenterPopularComponent />
      </HomeContent>
    </HomeWrapper>
  );
};

export default HomePage;
