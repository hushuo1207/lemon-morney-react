import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';


const MyLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>
      <TagSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </MyLayout>
  );
}

export default Money;
