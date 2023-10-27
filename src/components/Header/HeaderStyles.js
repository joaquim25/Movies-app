import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  margin: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input {
    border-radius: 30px;
    flex-grow: 1;
    width: 100%;
    max-width: 500px;
    align-self: center;
  }

  @media (min-width: 1024px) {
    margin: 2.5rem auto;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  order: -1;
  gap: 2rem;
  margin-bottom: 1rem;

  & a {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 2.5rem;
    right: 3rem;
  }
`;
