import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
const menus=[
    {
        name:'Trang chủ',
        to:'/',
        exact:true
    },
    {
        name:'Quản lý sản phẩm',
        to:'/product-list',
        exact:false
    }
]
const MenuLink=({label, to, activeWhenExact})=>{
    return(
        <Route
            path={to}
            exact={activeWhenExact}
            children={({match})=>{
                var active=match?'active':''
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="/#">CALL API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
    showMenus=menus=>{
        var result=null
        if(menus.length>0){
            result=menus.map((menu,index)=>{
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeWhenExact={menu.exact}
                    />
                )
            })
        }
        return result
    }
}
export default Menu;
