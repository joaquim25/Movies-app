import styled from "@emotion/styled";

export const ListPanelContainer = styled.div`
  margin-top: 30px;
  border-top: 2px solid lightgrey;
  padding: 0 3rem;
`;

export const ListPanelTitle = styled.h2`
  text-align: center;
`;

export const ListPanelForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  & button {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 0 5px 5px 0;
    border: 2px solid rgba(200, 200, 200, 0.1);
    padding: 0 1rem;
    text-wrap: nowrap;
  }
`;

export const ListPanelInput = styled.input`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px 0 0 5px;
  border: 2px solid rgba(200, 200, 200, 0.1);
  border-right: none;
  outline: none;
  height: 30px;
  padding: 0 20px;
  width: 100%;
  max-width: 200px;
`;

export const ListDropdownSelect = styled.select`
  display: flex;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(200, 200, 200, 0.1);
  padding: 0.5rem 2rem;
  border-radius: 10px;
  margin-bottom: 50px;

  & option {
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 0.7rem;
  }

  @media (min-width: 768px) {
    & option {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    & option {
      font-size: 0.9rem;
    }
  }
`;
