import { type } from 'os';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import { Container, Content, Info, MoreInfo } from './styles';
import Types from '../types';

import amazonImg from '@base/assets/images/ic-amazon.png';
import americanasImg from '@base/assets/images/ic-americanas.png';
import disneyImg from '@base/assets/images/ic-disney.png';

interface IProps {
  item: any;
  loading: boolean;
  first: boolean;
  type: Types;
}

const ListItem: React.FC<IProps> = ({ item, loading, first, type }) => {
  const [showInfo, setShowInfo] = useState(false);

  // const list = []

  return (
    <Container loading={loading} showInfo={showInfo}>
      <MoreInfo className={showInfo ? 'showOpacity' : ''} first={first}>
        <div className="name">{item.name || item.title}</div>

        {type != Types.character ? (
          <div className="description">{item.description}</div>
        ) : (
          <div className="description">
            <div className="title">Aparições</div>
            {item.series.items.map((serie: any) => (
              <>
                {serie.name}
                <br />
              </>
            ))}
          </div>
        )}

        {type != Types.character ? (
          <div className="whereFound">
            <div className="title">
              {type != Types.hq
                ? 'Disponível para compra:'
                : 'Disponível em streaming:'}
            </div>
            <div className="links">
              {type == Types.hq ? (
                <>
                  <a href="#link">
                    <img src={amazonImg} />
                  </a>
                  <a href="#link">
                    <img src={americanasImg} />
                  </a>
                </>
              ) : (
                <a href="#link">
                  <img src={disneyImg} />
                </a>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="rate">
          {type == Types.character ? 'Avaliações dos Fãs' : 'Crítica'}
        </div>
        <div className="stars">
          <FaStar color="#FFB300" size="24" />
          <FaStar color="#FFB300" size="24" />
          <FaStar color="#FFB300" size="24" />
          <FaStar color="#FFB300" size="24" />
          <FaStar color="#84848D" size="24" />
        </div>

        <div className="close">
          <button onClick={() => setShowInfo(!showInfo)}>
            <IoMdCloseCircleOutline color="#fff" size="30" />
          </button>
        </div>
      </MoreInfo>

      <Content>
        <img
          src={
            item.poster ||
            item.thumbnail.path +
              '/portrait_uncanny.' +
              item.thumbnail.extension
          }
        />
        <Info className={showInfo ? 'hideOpacity' : ''}>
          <div className="name">{item.name || item.title}</div>
          <div className="description">{item.description}</div>
          <button className="more" onClick={() => setShowInfo(!showInfo)}>
            ver detalhes
          </button>
        </Info>
      </Content>
    </Container>
  );
};

export default ListItem;
