import styled from 'styled-components';
import { Formik, Form, ErrorMessage, Field } from 'formik';

export const Main = styled(Formik)`
  display: flex;
  height: 40px;
  margin-bottom: 16px;
`;

export const ContactForm = styled(Form)`
  display: flex;
  gap: 12px;
  padding: 18px;
  border-radius: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.72px;
  color: red;
`;

export const FieldForm = styled(Field)`
  display: flex;
  padding: 12px;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
