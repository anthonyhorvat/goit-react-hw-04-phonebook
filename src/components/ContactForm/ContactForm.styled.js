import styled from 'styled-components';

export const InputName = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #474544;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: solid 2px #474544;
  color: #474544;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;

  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  &:focus {
    outline: none;
    padding: 0 0 0.875em 0;
    background-color: transparent;
  }
`;

export const NeonButton = styled.button`
  background: none;
  border: solid 2px #474544;
  color: #474544;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 10px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  margin-bottom: 30px;

  &:hover {
    background: #474544;
    color: #f2f3eb;
  }
`;
