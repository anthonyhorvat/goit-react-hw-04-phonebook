import styled from 'styled-components';

export const ContactElement = styled.li`
  font-family: 'Helvetica', Arial, sans-serif;
  color: #474544;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const ContactListElement = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

export const DeleteButton = styled.button`
  background: none;
  border: solid 2px #474544;

  color: #474544;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 10px;
  font-weight: bold;
  outline: none;
  padding: 5px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  margin-left: 10px;

  &:hover {
    background: #474544;
    color: #f2f3eb;
  }
`;
