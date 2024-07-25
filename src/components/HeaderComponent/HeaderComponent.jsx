import React, {Fragment, useEffect, useState} from 'react'
import {Badge, Col} from 'antd'
import Search from 'antd/lib/transfer/search'
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccout,
  WrapperTextHeaderSmall,
  WrapperContentPopup,
} from "./style";
import {
  UserOutlined, CaretDownOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { Button, Popover } from 'antd';
import * as UserService from '../../services/UserService'
import {resetUser} from "../../redux/slides/userSlide"
import Loading from "../../components/LoadingComponent/Loading"
import { searchProduct } from '../../redux/slides/productSlide';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user  = useSelector((state) => state.user)
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [loading, setLoading] = useState(false)
     const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [search, setSearch] = useState("");
    const order = useSelector((state) => state.order);
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

      useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
  }, [user?.name, user?.avatar])

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    const onSearch = (e) => {
        dispatch(searchProduct(e.target.value))
        console.log('e', e.target.value)
    }


    const content = (
      <div>
        <WrapperContentPopup onClick={() => navigate("/profile-user")}>
          Thông tin người dùng
        </WrapperContentPopup>
        {user?.isAdmin && (
          <WrapperContentPopup onClick={() => navigate("/system/admin")}>
            Quản lí hệ thống
          </WrapperContentPopup>
        )}
        <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>
          Đơn hàng của tôi
        </WrapperContentPopup>
        <WrapperContentPopup onClick={handleLogout}>
          Đăng Xuất
        </WrapperContentPopup>
      </div>
    );

    const handleClickNavigate = (type) => {
      if (type === "profile") {
        navigate("/profile-user");
      } else if (type === "admin") {
        navigate("/system/admin");
      } else if (type === "my-order") {
        navigate("/my-order", {
          state: {
            id: user?.id,
            token: user?.access_token,
          },
        });
      } else {
        handleLogout();
      }
      setIsOpenPopup(false);
    };




    return (
      <div
        style={{
          width: "100%",
          background: "rgb(26,148,255)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/*gutter: cách phần header*/}
        <WrapperHeader
          style={{
            justifyContent:
              isHiddenSearch && isHiddenSearch ? "space-between" : "unset",
          }}
        >
          <Col span={5}>
            <WrapperTextHeader onClick={() => navigate("/")}>
              PN STORE
            </WrapperTextHeader>
          </Col>
          {!isHiddenSearch && (
            <Col span={13}>
              <ButtonInputSearch
                size="large"
                textButton="Tìm Kiếm"
                bordered={false}
                backgroundColor="#fff"
                placeholder="input search text"
                onChange={onSearch}
              />
            </Col>
          )}
          <Col
            span={6}
            style={{ display: "flex", gap: "54px", alignItems: "center" }}
          >
            <Loading isLoading={loading}>
              <WrapperHeaderAccout>
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt="avatar"
                    style={{
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <UserOutlined style={{ fontSize: "30px" }} />
                )}
                {user?.access_token ? (
                  <>
                    <Popover content={content} trigger="click">
                      <div style={{ cursor: "pointer" }}>
                        {userName.length ? userName : user?.email}
                      </div>
                    </Popover>
                  </>
                ) : (
                  <div
                    onClick={handleNavigateLogin}
                    style={{ cursor: "pointer" }}
                  >
                    <WrapperTextHeaderSmall>
                      Đăng nhập/Đăng ký
                    </WrapperTextHeaderSmall>
                    <div>
                      <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                      <Fragment></Fragment>
                      <CaretDownOutlined />
                    </div>
                  </div>
                )}
              </WrapperHeaderAccout>
            </Loading>
            {!isHiddenCart && (
              <div
                onClick={() => navigate("/order")}
                style={{ cursor: "pointer" }}
              >
                <Badge count={order?.orderItems?.length} size="small">
                  <ShoppingCartOutlined
                    style={{ fontSize: "30px", color: "#fff" }}
                  />
                </Badge>
                <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
              </div>
            )}
          </Col>
        </WrapperHeader>
      </div>
    );
}
export default HeaderComponent
