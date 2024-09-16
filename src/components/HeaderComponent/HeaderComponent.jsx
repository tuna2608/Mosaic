import React from "react";
import { Header, HeaderContent, LinkHeader, LinkNavbar, Menu, MenuItem, NavBar } from "./style";
import { Image } from "antd";
import logo1 from '../../assets/images/logo1.png' 
import {
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <HeaderContent>
        <Image
          preview={false}
          width={170}
          height={51}
          src={logo1}
        />
        <Menu>
          <LinkHeader href="/">
            <MenuItem>Trang chủ</MenuItem>
          </LinkHeader>
          <LinkHeader href="/product">
            <MenuItem>Sản phẩm</MenuItem>
          </LinkHeader>
          <LinkHeader href="/contact">
            <MenuItem>Liên hệ</MenuItem>
          </LinkHeader>
          <LinkHeader href="/infor">
            <MenuItem>Giới thiệu</MenuItem>
          </LinkHeader>
        </Menu>
        <NavBar>
          <LinkNavbar href="/">
            <UserOutlined />
          </LinkNavbar>
          <LinkNavbar href="/">
          <SearchOutlined />
          </LinkNavbar>
          <LinkNavbar href="/">
          <ShoppingOutlined />
          </LinkNavbar>
        </NavBar>
        </HeaderContent>
      </Header>
    </>
  );
};

export default HeaderComponent;
