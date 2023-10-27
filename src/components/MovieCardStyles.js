import styled from "@emotion/styled";

export const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;

  & svg {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    fill: #fff;
    filter: drop-shadow(2px 2px 1px rgb(0 0 0 / 0.6));
  }

  & img {
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
  }

  & p {
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }

  & :last-child {
    font-weight: 400;
    color: rgba(200, 200, 200, 0.4);
  }
`;
