import styled from "@emotion/styled";

export const MoviesContainer = styled.div`
  padding: 0 3rem;
  margin: 0 auto;
  max-width: 1200px;
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

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const PageButtons = styled.div`
  justify-content: center;
  display: flex;

  & .prevBtn {
    margin-right: auto;
  }

  & .nextBtn {
    margin-left: auto;
  }

  & button {
    cursor: pointer;
    background-color: rgba(100, 100, 100, 0.8);
    width: 70px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.5);

    :hover {
      box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.6);
    }

    & svg {
      margin: 0 auto;
      position: relative;
      top: 2px;

      & polyline {
        stroke: white;
      }
    }
  }
`;

export const PageInfo = styled.p`
  text-align: center;

  margin: 20px 0;
  font-size: 0.8rem;
  color: rgb(200, 200, 200);
`;
