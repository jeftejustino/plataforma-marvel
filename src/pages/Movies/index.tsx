import React, { useEffect, useState } from 'react';

import { Container, Filter } from './styles';

import { LoadListRequest } from '@base/store/modules/movies/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@base/store/types';
import { IProps } from '@base/store/modules/movies/IActions';
import ListItem from '@base/components/ListItem';
import Types from '@base/components/ListItem/types';
import { useWindowSize, Size } from '@base/util/resize';
import Select from '@base/components/Select';

// interface IProps {}

const Movies: React.FC = () => {
  const movies = useSelector((state: RootState): IProps => state.movies);
  const options = [
    { value: 'lancamento', label: 'Lançamento' },
    { value: 'cronologia', label: 'Cronologia' },
  ];

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
    if (limit > 0 && (movies?.total == 0 || limit != movies.limit)) {
      dispatch(LoadListRequest(limit, 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const goNext = () => {
    dispatch(LoadListRequest(limit, movies.page + 1));
  };

  const goBack = () => {
    dispatch(LoadListRequest(limit, movies.page - 1));
  };

  return (
    <Container>
      <Filter>
        <Select options={options} />
      </Filter>
      <ListItem
        items={movies.movies}
        goNext={goNext}
        goBack={goBack}
        page={movies.page}
        limit={limit}
        total={movies.total}
        loading={movies.loading}
        type={Types.movie}
      />
    </Container>
  );
};

export default Movies;
