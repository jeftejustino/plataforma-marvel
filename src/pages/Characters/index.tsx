import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import { LoadListRequest } from '@base/store/modules/characters/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@base/store/types';
import { IProps } from '@base/store/modules/characters/IActions';
import ListItem from '@base/components/ListItem';
import Types from '@base/components/ListItem/types';
import { useWindowSize, Size } from '@base/util/resize';

// interface IProps {}

const Characters: React.FC = () => {
  const characters = useSelector(
    (state: RootState): IProps => state.characters,
  );

  const size: Size = useWindowSize();
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    if (size.width) {
      if (limit != 1 && size.width < 830) {
        setLimit(1);
      } else if (limit != 2 && size.width <= 1100 && size.width >= 830) {
        setLimit(2);
      } else if (limit != 3 && size.width > 1100) {
        setLimit(3);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (limit > 0 && (characters?.total == 0 || limit != characters.limit)) {
      dispatch(LoadListRequest(limit, 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        limit={limit}
        total={characters.total}
        loading={characters.loading}
        type={Types.character}
      />
    </Container>
  );
};

export default Characters;
