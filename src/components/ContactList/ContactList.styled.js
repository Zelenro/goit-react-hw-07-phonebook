import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  width: calc(20% - 8px);
  margin: 0;
  padding: 12px;
  border: 1px solid #bf4f74;
  box-sizing: border-box;
`;

export const ItemButton = styled.button`
  margin: 8px;
  display: block;
  background-color: #fa8d62;
`;
