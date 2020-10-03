import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 80%;
  height: 50vh;
`;

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  margin: auto;
  margin-bottom: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const User = styled.div``;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type  {
    margin-right: 0;
  }
`;
