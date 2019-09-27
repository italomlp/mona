import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 315px;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
    opacity: 0.8;
    font-weight: normal;

    &:hover {
      opacity: 1;
      font-weight: bolder;
    }
  }
`;
