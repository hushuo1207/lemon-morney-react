import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


// import x from 'icons/money.svg'
// svgo-loader  => svg-sprite-loader 会将引入的svg 转换为symbol格式显示在网页上
// console.log(x);   为什么不能删除 TODO 转用 require
// 不log无法显示  -- TreeShaking 没有用到会被这个分析逻辑删除（代码内部看似没用）
// TreeShaking  不适用于require


const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li{
      width: 33.3333%;
      text-align: center;
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: red;
          .icon{
            fill: red;
          }
        }
      }
    }
  }
`
const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;