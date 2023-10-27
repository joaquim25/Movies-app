import styled from "@emotion/styled";

export const MoviePageContainer = styled.div`
  padding: 3rem;
`;

export const MoviePageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
  }
`;

export const MoviePageSubtitle = styled.p`
  color: rgba(200, 200, 200, 1);
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const MovieInfo = styled.div`
  margin-top: 2rem;
  gap: 2rem;
`;

export const MovieImg = styled.img`
  border-radius: 10px;
  margin: 0 20px 0 0;

  @media (min-width: 425px) {
    float: left;
  }
`;

export const MovieIconDetails = styled.div`
  margin: 20px;

  @media (min-width: 425px) {
    float: right;
  }
`;

export const Detailinfo = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;

  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const DirectorInfo = styled.div`
  padding-top: 3rem;
  clear: both;
`;

export const DirectorDetails = styled.div`
  margin: 0 auto;
  width: 160px;

  @media (min-width: 425px) {
    margin-left: 20px;
    float: right;
  }
`;

export const DirectorImg = styled.img`
  margin-bottom: 10px;
  max-width: 160px;
  border: 2px solid #333;
  border-radius: 10px;
`;

export const DirectorDetailsText = styled.p`
  color: rgba(150, 150, 150, 1);
  font-weight: 200;
  margin-bottom: 10px;

  & span {
    display: block;
    color: #fff;
    font-weight: 500;
  }
`;

export const OtherMovies = styled.div`
  padding-top: 40px;
  clear: both;

  & h2 {
    text-align: center;
  }

  & p {
    text-align: center;
    font-size: 0.8rem;
    color: rgb(150, 150, 150);
  }
`;
