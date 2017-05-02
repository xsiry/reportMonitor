package com.netho.ywh.monitor.dao;

import org.apache.ibatis.annotations.Param;

import com.netho.ywh.monitor.pojo.User;

/**
 * Created by xsiry on 2017/4/21.
 */
public interface IUserDao {
    //接口方法，通过用户名得到User对象
    User checkLogin(@Param("userName") String name, @Param("passWord") String password);
}

