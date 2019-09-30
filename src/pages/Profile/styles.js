import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 10px;
    }

    hr {
      margin-top: 10px;
      margin-bottom: 20px;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.4);
    }

    button {
      padding: 10px;
    }
  }
`;
