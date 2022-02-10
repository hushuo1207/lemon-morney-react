import React from 'react';
import {Center} from 'components/Center'
import { Space } from 'components/Space';
import styled from 'styled-components';
import { Button } from 'components/Button';
import {NavLink} from 'react-router-dom';

const Content = styled.div`
  font-size: 48px;
`

function NoMatch() {

  return (
    <Center>
      <Space/>
      <Space/>
      <Space/>
      <Content>
        404
      </Content>
      <Space/>
      <Space/>
      <Space/>
      页面不存在，请点击下面按钮
      <Space/>
      <Space/>
      <Space/>
      <Button>
        <NavLink to="/money">
          返回首页
        </NavLink>
      </Button>
    </Center>
  );
}


export default NoMatch;
