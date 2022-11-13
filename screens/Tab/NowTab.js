import React from 'react';
import ScreenHeader from '../../components/Header/ScreenHeader';
import GoSearch from '../../components/Button/GoSearch';
import NewNow from '../../components/List/NewNow';

function NowTab() {
  const now = [1, 2, 3, 4, 5];
  return (
    <>
      <ScreenHeader title="상영작" />
      <GoSearch />
      <NewNow propsRefer={now} />
    </>
  );
}
export default NowTab;
