import styled from "@emotion/styled";

export const DefaultInput = styled.input`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  height: 30px;
  padding: 0 20px;
  border: 0;
  border-radius: 5px;
`;

export const DefaultButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 3rem;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(200, 200, 200, 0.2);
  margin: 0 auto;
  transition: 0.2s all ease-in-out;

  :hover {
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SuccessMessage = styled.p`
  color: green;
`;