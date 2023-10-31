import styled from "@emotion/styled";

// Auth Styles --------------------------------------------------------

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
