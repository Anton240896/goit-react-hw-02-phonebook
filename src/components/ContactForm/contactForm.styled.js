import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 472px;

  padding: 12px;
  margin-top: 28px;
  margin-bottom: 48px;

  button {
    min-width: 118px;
    height: 49px;
    background-color: #dee873;
    margin-top: -12px;
    margin-left: 27px;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: 20px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;

  input {
    display: block;
    width: 167px;
    margin-left: 10px;
  }
`;
