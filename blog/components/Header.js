import React, { useState, useEffect } from "react";
import { Row, Col, Menu } from "antd";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";

const Header = () => {
  const [navArray, setNavArray] = useState([]);

  //跳转到列表页
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavArray(res.data.data);
        return res.data.data;
      });
      setNavArray(result);
    };
    fetchData();
  }, []);
  return (
    <div className="header">
      <Row justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">Maike</span>
          <span className="header-txt">热爱前端，专注前端开发</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">博客首页</Menu.Item>
            {navArray.map((item) => {
              return <Menu.Item key={item.Id}>{item.typeName}</Menu.Item>;
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
