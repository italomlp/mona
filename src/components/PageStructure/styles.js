import styled from 'styled-components';
import { textColor } from '../../styles/theme';

export const GutterContainer = styled.div`
  height: 100%;
  width: 5px;
  cursor: col-resize;
`;

export const Gutter = styled.div`
  height: 100%;
  width: 2px;
  background-color: rgba(125, 125, 125, 0.3);
`;

export const Editor = styled.div`
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
