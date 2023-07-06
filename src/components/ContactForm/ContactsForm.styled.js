import styled from 'styled-components';

export const ContactsForms = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

export const ContactsLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}`;

export const ContactsBtn = styled.button`
  padding: 8px;
  border: 1px solid #d0d0d0;
  border-radius: 15px;
  background-color: #fdfdfd;
  :hover {
    background-color: #2727c4bf;
    border: 1px solid transparent;
    color: white;
  }
  margin-bottom: 10px;
`;

export const ContactsInput = styled.input`
  width: 100%
  height: 25px;
  padding: 5px;
  outline: none;
  border: 1px solid rgb(125 125 125 / 71%);;
`;
