package com.netho.ywh.monitor.pojo;

/**
 * Created by xsiry on 2017/4/21.
 */
public class User {

    private int sysusid;
    private String username;
    private String pswd;
    private int nethoid;

    public int getId() {
        return sysusid;
    }
    public void setId(int sysusid) {
        this.sysusid = sysusid;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return pswd;
    }
    public void setPassword(String password) {
        this.pswd = password;
    }
    public int getNethoid() {
        return nethoid;
    }
    public void setNethoid(int nethoid) {
        this.nethoid = nethoid;
    }
}