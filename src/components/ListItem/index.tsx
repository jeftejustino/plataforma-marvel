import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Types from './types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Item from './item';

import { Container, Actions, List, Loading } from './styles';

interface IProps {
  goNext: any;
  goBack: any;
  items: any;
  page: number;
  limit: number;
  total: number;
  loading: boolean;
  type: Types;
}

const ListItem: React.FC<IProps> = ({
  goBack,
  goNext,
  items,
  page,
  limit,
  total,
  loading,
  type,
}) => {
  return (
    <Container>
      <List>
        {items &&
          items.map((item: any, index: number) => (
            <Item
              loading={loading}
              key={item.id}
              item={item}
              first={index == 0}
              type={type}
            />
          ))}
        {!items && loading ? (
          <Loading>
            <SkeletonTheme color="#636363" highlightColor="#777">
              <Skeleton width={289} height={439} count={limit} />
            </SkeletonTheme>
          </Loading>
        ) : (
          <></>
        )}
      </List>

      <Actions>
        {page > 1 ? (
          <button className="back" type="button" onClick={() => goBack()}>
            <FaArrowLeft color="#f00" size={32} />
          </button>
        ) : (
          <></>
        )}

        {total > limit * page ? (
          <button className="next" type="button" onClick={() => goNext()}>
            <FaArrowRight color="#f00" size={32} />
          </button>
        ) : (
          <></>
        )}
      </Actions>
    </Container>
  );
};

export default ListItem;
