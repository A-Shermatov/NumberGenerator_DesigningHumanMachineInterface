
import './App.css'
import { Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


const items = [{key: '/firstTest', label: 'Первый тест', target: 'firstTest'}, {key: '/secondTest', label: 'Второй тест', target: 'secondTest'}]



function App() {


  const navigate = useNavigate();


  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  };
// цифры в h3 лучше h1
// цифры лучше чем пиктограммы

  //1 этап игры
    //ожидание начала
    //показывание элементов
    //выбор элементов
    //вывод итогов и ожидание продолжения
  //2 этап игры
    //ожидание начала
    //показывание элементов
    //выбор элементов
    //вывод итогов и ожидание продолжения
 return (
  <Layout style={{height: '100vh'}}>
      <Sider collapsible>
        <Menu theme="dark" mode="inline" onClick={handleMenuClick} defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <Outlet/>
          </div>
        </Content>
      </Layout>
    </Layout>
 )
}

export default App
