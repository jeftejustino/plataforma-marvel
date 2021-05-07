import React, { useEffect } from 'react';

import { Container } from './styles';

import { LoadListRequest } from '@base/store/modules/characters/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@base/store/types';
import { IProps } from '@base/store/modules/characters/IActions';
import ListItem from '@base/components/ListItem';
import Types from '@base/components/ListItem/types';

// interface IProps {}

const Characters: React.FC = () => {
  const limit = 3;
  const characters = useSelector(
    (state: RootState): IProps => state.characters,
  );

  characters.page;
  characters.limit;

  // const list = []
  const dispatch = useDispatch();
  useEffect(() => {
    if (characters?.total == 0) {
      dispatch(LoadListRequest(limit, 1));
    }
  }, [limit]);

  const goNext = () => {
    dispatch(LoadListRequest(limit, characters.page + 1));
  };

  const goBack = () => {
    dispatch(LoadListRequest(limit, characters.page - 1));
  };

  return (
    <Container>
      <ListItem
        items={characters.characters}
        goNext={goNext}
        goBack={goBack}
        page={characters.page}
        limit={characters.limit}
        total={characters.total}
        loading={characters.loading}
        type={Types.character}
      />
    </Container>
  );
};

export default Characters;
