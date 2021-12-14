import React from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout
function HeaderBar() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Report</Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderBar
