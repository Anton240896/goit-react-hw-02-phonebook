import styled from 'styled-components';

export const ContactContainer = styled.li`
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  gap: 40px;

  button {
    width: 64px;
    height: 30px;
    background-color: #dee873;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    box-shadow: 3px 5px 20px rgba(0, 5, 0, 0.1);
  }
`;

export const ContactName = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 20px;
`;
