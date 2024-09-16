import React from "react";
import {
  ImgTypeProduct,
  LinkTypeProduct,
  SubTitle,
  Title,
  TypeBox,
  TypeName,
  TypeProduct,
} from "./style";
import tranh from "../../assets/images/image1.png";
import lotLy from "../../assets/images/image2.png";
import tranhDa from "../../assets/images/image3.png";

const TopTypeProductComponent = () => {
  return (
    <div style={{ padding: "80px 0" }}>
      <Title>TOP DANH MỤC SẢN PHẨM </Title>
      <SubTitle>
        Sản phẩm của Mosart được lựa chọn từ sự trân quý những điều giản dị,
        tinh tế mà thiên nhiên ban tặng. Cũng như trân quý sự cần mẫn, tinh tế
        từ bàn tay khéo léo của các nghệ nhân.
      </SubTitle>
      <TypeProduct>
        <LinkTypeProduct href="">
          <TypeBox>
            <TypeName>Tranh mosaics</TypeName>
            <ImgTypeProduct src={tranh} alt="" />
          </TypeBox>
        </LinkTypeProduct>
        <LinkTypeProduct href="">
          <TypeBox>
            <TypeName>Lót ly</TypeName>
            <ImgTypeProduct src={lotLy} alt="" />
          </TypeBox>
        </LinkTypeProduct>
        <LinkTypeProduct href="">
          <TypeBox>
            <TypeName>Mosaics</TypeName>
            <ImgTypeProduct src={tranhDa} alt="" />
          </TypeBox>
        </LinkTypeProduct>
      </TypeProduct>
    </div>
  );
};

export default TopTypeProductComponent;
