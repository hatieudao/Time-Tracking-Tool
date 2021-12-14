import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { FundOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'

const { Sider } = Layout
function SideBar() {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapse = () => setCollapsed(!collapsed)
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={handleCollapse}
      width={200}
      className="site-layout-background"
      style={{ minHeight: '100vh' }}
    >
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="sub1" icon={<FundOutlined />}>
          Report
          <Link to="/report" />
        </Menu.Item>

        <Menu.Item key="sub2" icon={<EditOutlined />}>
          Create New Record
          <Link to="/new" />
        </Menu.Item>

        <Menu.Item key="sub3" icon={<SettingOutlined />}>
          Setting
          <Link to="/setting" />
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideBar
