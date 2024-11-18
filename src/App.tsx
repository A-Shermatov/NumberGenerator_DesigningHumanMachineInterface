import "./App.css";
//import { Layout, MenuProps } from 'antd';
import { Layout } from "antd";
// import React from 'react';
//import { Outlet, useNavigate } from 'react-router-dom';
import { Outlet, NavLink } from "react-router-dom";
const { Content } = Layout;

// const items = [{key: '/firstTest', label: 'Первый тест', target: 'firstTest'}, {key: '/secondTest', label: 'Второй тест', target: 'secondTest'}]

function App() {
  //const navigate = useNavigate();

  // const handleMenuClick: MenuProps['onClick'] = (e) => {
  //   navigate(e.key)
  // };
  // цифры красным цветом на белом фоне лучше чем цифры черным цветом на белом фоне
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
    <Layout style={{ minHeight: "100vh", background: "white" }}>
      {/* <Sider collapsible>
        <Menu theme="dark" mode="inline" onClick={handleMenuClick} defaultSelectedKeys={['1']} items={items} />
      </Sider> */}
      <Layout>
        <Content style={{ margin: "10px 16px 0" }}>
          <nav style={{display: "inline-block"}}>
            <NavLink to={"/firstTest"} style={{fontSize: "24px", padding: "0px 20px 0px 0px"}}>
              Первый тест
            </NavLink>
            <NavLink to={"/secondTest"} style={{fontSize: "24px"}}>
              Второй тест
            </NavLink>
          </nav>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
