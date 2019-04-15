import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/SubHeader/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Detail = ({ data, match, history }) => {
  const items = data.items && data.items.filter(item => item.listId === parseInt(match.params.id))

  return (
    <>
      { history && <SubHeader goBack={() => history.goBack()} openForm={() => history.push(`${match.url}/new`)} /> }
      <ListWrapper>
        { items && items.map(item => <ListItem key={item.id} data={ item } />) }
      </ListWrapper>
    </>
  )
};

export default withDataFetching({dataSource: '../../assets/data.json', loadingMessage: "Loading..."})(Detail);
