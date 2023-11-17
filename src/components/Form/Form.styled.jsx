import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  padding: 8px;
  display: inline-flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0);
  margin-top: 8px;
`;

export const Input = styled(Field)`
  width: 250px;
  height: 25px;
  font-size: inherit;
`;

export const Button = styled.button`
  background-color: #0a66c2;
  border: none;
  border-radius: 100px;
  color: #ffffff;
  cursor: pointer;
  font: inherit;
  max-width: 480px;
  min-height: 40px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  /* touch-action: manipulation; */
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background-color: #16437e;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  &:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }
`;
