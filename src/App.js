import React from 'react'

import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/Sidebar'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import PageNotFound from './pages/PageNotFound'
import HomePage from './pages/HomePage'
import NewRecordPage from './pages/NewRecordPage'
import ReportPage from './pages/ReportPage'
import SettingPage from './pages/SettingPage'
const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout>
        <HeaderBar />
        <Layout>
          <SideBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/new" element={<NewRecordPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route exact path="/" element={<HomePage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Content>
            <FooterBar />
          </Layout>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
