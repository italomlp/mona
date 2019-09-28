import styled from 'styled-components';
import { textColor } from '../../styles/theme';

export const Container = styled.div`
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${textColor};
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  & > div > div {
    display: flex;
    justify-content: flex-end;
    & > * {
      &:not(:last-child) {
        margin-right: 20px;
      }

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
