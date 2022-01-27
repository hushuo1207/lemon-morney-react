import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';

type Category = '-' | '+'

const MyLayout = styled(Layout)`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [selected, setSelected] = useState({
  tags: [] as string[],
  note: '',
  category: '-' as Category,
  amount: 0
});
  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagSection value={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags: tags
                   })}/>
      <NoteSection value={selected.note}
                   onChange={(note) => {
                     setSelected({
                       ...selected,
                       note: note
                     });
                   }}/>
      <CategorySection value={selected.category}
                       onChange={(category) => {
                         setSelected({
                           ...selected,
                           category: category
                         });
                       }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => {
                          setSelected({
                            ...selected,
                            amount: amount
                          });
                        }}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;
