import styled from "@emotion/styled";

export const MoviesContainer = styled.div`
  padding: 0 3rem;
  margin: 0 auto;
`;

export const MoviesGrid = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: row;
  margin-bottom: 3rem;

  @media (min-width: 375px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 475px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;
