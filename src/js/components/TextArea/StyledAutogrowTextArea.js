import styled, { css } from 'styled-components';
import { disabledStyle, inputStyle } from '../../utils';
import { defaultProps } from '../../default-props';

const plainStyle = css`
  outline: none;
  border: none;
  width: 100%;
  -webkit-appearance: none;
`;

const resizeStyle = resize => {
  if (resize === 'horizontal') {
    return 'resize: horizontal;';
  }
  if (resize === 'vertical') {
    return 'resize: vertical;';
  }
  if (resize) {
    return 'resize: both;';
  }
  return 'resize: none;';
};

// from https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/
const TextAreaStyling = css`
  /* Identical styling required!! */
  /*
  border: 1px solid black;
  padding: 0.5rem;
  font: inherit;
  */

  /* Place on top of each other */
  grid-area: 1 / 1 / 2 / 2;

  ${inputStyle}
  ${props => props.resize !== undefined && resizeStyle(props.resize)}
  ${props => props.fillArg && 'height: 100%;'}
  ${props => props.plain && plainStyle}
  ${props =>
    props.disabled &&
    disabledStyle(
      props.theme.textArea.disabled && props.theme.textArea.disabled.opacity,
    )}
  ${props => props.theme.textArea && props.theme.textArea.extend};
`;

const StyledTextArea = styled.textarea`
  ${TextAreaStyling}
`;

StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, defaultProps);

export { StyledTextArea };

export const GrowWrap = styled.div`
  /* easy way to plop the elements on top
     of each other and have them both sized
    based on the tallest one's height */
  display: grid;

  ::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;

    ${TextAreaStyling}
  }

  > textarea {
    /* You could leave this, but after a user resizes, then it ruins the auto sizing */
    resize: none;

    /* Firefox shows scrollbar on growth, you can hide like this. */
    overflow: hidden;

    ${TextAreaStyling}
  }
`;