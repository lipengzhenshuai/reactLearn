import React from 'react';
import style from './sideBar.module.scss';

import {Link} from "react-router-dom";

import {Menu, Icon} from 'antd';

const {SubMenu} = Menu;


export default class SideBar extends React.Component {

    state = {
        theme: 'dark',
        current: '1',
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        // @ts-ignore
        return (
            <div className={style['side-bar']}>
                <Menu
                    // @ts-ignore
                    theme={this.state.theme}
                    // @ts-ignore
                    onClick={this.handleClick}
                    style={{width: 256}}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="mail"/><span>监控管理</span></span>}
                    >
                        <Menu.Item key="1">
                            <Link to="/dashboard">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/monitorM/trade">实时交易管控</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
