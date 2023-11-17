import styled from '@emotion/styled';

export const Boxitem = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 8px;
  margin-top: 8px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 16px;
  list-style: none;
`;
export const ListItem = styled.li`
  font-size: 12px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  width: 250px;
  justify-content: space-between;
  border-radius: 16px;
  border: 1px dashed black;
`;
export const Button = styled.button`
  background: #ffffff;
  border: 1px solid #ff4742;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  font: inherit;
  max-width: 480px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background-color: tomato;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
