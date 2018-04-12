import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, icon } from 'antd';
import { NAV_MENU } from './layoutConstant';
import './style.less';

const SubMenu = Menu.SubMenu;

class Layout extends Component {
  /**
   * 点击菜单时判断有无权限
   */
  handleClick = e => {
    this.props.history.push(e.item.props.link);
  };
  render() {
    const { current } = this.props;
    return (
      <div className="container-content">
        <div className="navbar-wrapper">
          <Menu
            className="nav-menu"
            mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[current]}
          >
            <Menu.Item key={NAV_MENU.home} link="home">
              首页
            </Menu.Item>
            <Menu.Item key={NAV_MENU.grid} link="grid">
              栅格布局
            </Menu.Item>
            <Menu.Item key={NAV_MENU.menu} link="menu">
              菜单
            </Menu.Item>
            <Menu.Item key={NAV_MENU.chart} link="chart">
              可视化图案例
            </Menu.Item>
            <Menu.Item key={NAV_MENU.tabs} link="tabs">
              标签页
            </Menu.Item>
            <SubMenu title="搜索">
              <Menu.Item key={NAV_MENU.customer}>搜索1</Menu.Item>
              <Menu.Item key={NAV_MENU.event}>搜索2</Menu.Item>
              <Menu.Item key={NAV_MENU.task}>搜索3</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  current: state.navQuery.current
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
