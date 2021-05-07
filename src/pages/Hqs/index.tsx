import React, { useEffect } from 'react';

import { Container } from './styles';

import { LoadListRequest } from '@base/store/modules/hqs/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@base/store/types';
import { IProps } from '@base/store/modules/hqs/IActions';
import ListItem from '@base/components/ListItem';
import Types from '@base/components/ListItem/types';

// interface IProps {}

const Hqs: React.FC = () => {
  const limit = 3;
  const hqs = useSelector((state: RootState): IProps => state.hqs);

  // const list = []
  const dispatch = useDispatch();
  useEffect(() => {
    if (hqs?.total == 0) {
      dispatch(LoadListRequest(limit, 1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const goNext = () => {
    dispatch(LoadListRequest(limit, hqs.page + 1));
  };

  const goBack = () => {
    dispatch(LoadListRequest(limit, hqs.page - 1));
  };

  return (
    <Container>
      <ListItem
        items={hqs.hqs}
        goNext={goNext}
        goBack={goBack}
        page={hqs.page}
        limit={hqs.limit}
        total={hqs.total}
        loading={hqs.loading}
        type={Types.hq}
      />
    </Container>
  );
};

export default Hqs;
