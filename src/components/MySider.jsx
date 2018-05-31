import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from './SiderMenu';
import '@/style/menu.less';
import logo from '@/logo.svg';

const { Sider } = Layout;

class MySider extends Component {
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth={this.props.responsive ? 0 : undefined}
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <div className="logo" style={{ paddingLeft: this.props.collapsed ? '14px' : '6px' }}><img src={logo} alt="" /><h3>React Antd Admin</h3></div>
                <SiderMenu
                    menus={this.props.menus}
                    mode="inline"
                    onClick={this.props.menuClick}
                    onOpenChange={this.props.openMenu}
                    selectedKeys={[this.props.selectedKey]}
                    openKeys={this.props.openKeys}
                />
            </Sider>
        )
    }
}
export default MySider;