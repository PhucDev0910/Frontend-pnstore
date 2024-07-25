import React, { useState } from "react";
import {
  ProductOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { getItem } from "../../utils";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import OrderAdmin from "../../components/OrderAdmin/OrderAdmin";
import AdminUser from "../../components/AdminUser/AdminUser";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import { useSelector } from "react-redux";
import * as OrderService from "../../services/OrderService";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import { useQueries } from "react-query";
import { useMemo } from "react";

const AdminPage = () => {
  const user = useSelector((state) => state?.user);
  const items = [
    getItem("Người dùng", "user", <UserOutlined />),
    getItem("Sản Phẩm", "product", <ProductOutlined />),
    getItem("Đơn hàng", "orders", <ShoppingCartOutlined />),
  ];
  const [keySelected, setKeySelected] = useState("");
  const getAllOrder = async () => {
    const res = await OrderService.getAllOrder(user?.access_token);
    return { data: res?.data, key: "orders" };
  };

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    console.log("res1", res);
    return { data: res?.data, key: "products" };
  };

  const getAllUsers = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    console.log("res", res);
    return { data: res?.data, key: "users" };
  };
  const renderPage = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "product":
        return <AdminProduct />;

      case "orders":
        return <OrderAdmin />;

      default:
        return <></>;
    }
  };

  const handleOnClick = ({ key }) => {
    setKeySelected(key);
  };
  console.log("key", keySelected);

  return (
    <>
      <HeaderComponent isHiddenSearch isHiddenCart />
      <div style={{ display: "flex", overflowX: "hidden" }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: "1px 1px 2px #ccc",
            height: "100vh",
          }}
          items={items}
          onClick={handleOnClick}
        />
        <div style={{ flex: 1, padding: "15px 0 15px 15px" }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};
export default AdminPage;
