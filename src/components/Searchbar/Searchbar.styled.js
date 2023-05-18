import { Field, Form } from 'formik';
import styled from 'styled-components';

export const SubmitBtn = styled.button`
  position: absolute;
  border: none;
  padding: 0;
  left: 8px;
  top: 8px;
  cursor: pointer;
`;

export const SearchForm = styled(Form)`
  position: relative;
`;

export const SearchInput = styled(Field)`
  width: 400px;
  height: 100%;
  padding: 5px 5px 5px 28px;
  border: none;
  border-radius: 5px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 8px;
  background-color: #3f51b5;
`;
