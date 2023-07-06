import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;

export const ContactTitle = styled.p`
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ContactBtn = styled.button`
  background-color: #e9e9e9;
  border: transparent;
  border-radius: 10px;
  padding: 4px;
  margin-left: 7px;
  :hover {
    background-color: blue;
    color: white;
  }
`;
