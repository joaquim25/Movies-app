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

// Login & Register --------------------------------------------------------

export const AuthContainer = styled.div`
  & img {
    display: none;
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 60% 40%;

    & img {
      display: block;
      object-fit: cover;
      height: 70%;
      width: 100%;
      border-radius: 50px 0 0 50px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 3rem;
    font-weight: 300;
  }

  & form {
    border-radius: 20px;
    padding: 2rem;
    display: grid;
    row-gap: 10px;

    & input {
      margin: 5px 0;
      width: 100%;
    }

    & button {
      margin-top: 1rem;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SuccessMessage = styled.p`
  color: green;
`;

export const ExtraFormLinks = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  position: relative;
  top: 40px;

  & a {
    text-decoration: underline;
  }
`;
