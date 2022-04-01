import React from "react";
import { Avatar, Divider } from "antd";

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar
          size={100}
          src="https://img2.baidu.com/it/u=2006779905,1912592004&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        />
      </div>
      <div className="author-introduction">
        目前主做前端开发。努力每天都有所进步。
        <Divider />
        <Avatar size={28} className="account" />
        <Avatar size={28} className="account" />
        <Avatar size={28} className="account" />
      </div>
    </div>
  );
};

export default Author;
