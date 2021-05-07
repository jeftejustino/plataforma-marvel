import React, { useEffect } from 'react';

import { Container } from './styles';

import { LoadListRequest } from '@base/store/modules/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@base/store/types';
import { IProps } from '@base/store/modules/movies/IActions';
import ListItem from '@base/components/ListItem';
import Types from '@base/components/ListItem/types';

// interface IProps {}

const Movies: React.FC = () => {
  const limit = 3;
  const movies = useSelector((state: RootState): IProps => state.movies);

  // const list = []
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies?.total == 0) {
      dispatch(LoadListRequest(limit, 1));
    }
  }, [limit]);

  const goNext = () => {
    dispatch(LoadListRequest(limit, movies.page + 1));
  };

  const goBack = () => {
    dispatch(LoadListRequest(limit, movies.page - 1));
  };

  return (
    <Container>
      <ListItem
        items={movies.movies}
        goNext={goNext}
        goBack={goBack}
        page={movies.page}
        limit={movies.limit}
        total={movies.total}
        loading={movies.loading}
        type={Types.movie}
      />
    </Container>
  );
};

export default Movies;
