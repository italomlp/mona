import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: calc(100% - 65px);
`;
