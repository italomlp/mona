import styled from 'styled-components';
import { textColor } from '../../styles/theme';

export const Container = styled.div`
  padding: 10px;

  &,
  .megadraft,
  .megadraft-editor,
  .DraftEditor-root,
  .DraftEditor-editorContainer,
  .DraftEditor-editorContainer > * {
    height: 100%;
    max-height: 100%;
    width: 100%;
    overflow: scroll;

    .paragraph:not(:first-child) {
      margin-top: 10px;
    }

    &,
    .public-DraftEditorPlaceholder-root {
      letter-spacing: initial;
      line-height: initial;
      color: ${textColor};
      font-size: 14px;
      font-family: inherit;
    }

    .public-DraftEditorPlaceholder-root {
      opacity: 0.4;
    }
  }
`;
