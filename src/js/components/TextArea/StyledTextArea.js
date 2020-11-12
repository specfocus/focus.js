import styled, { css } from 'styled-components';
import { defaultProps } from '../../default-props';
import { disabledStyle, inputStyle } from '../../utils';

const plainStyle = css`
  outline: none;
  border: none;
  width: 100%;
  -webkit-appearance: none;
`;

const autoStyle = css`
  
`;

const resizeStyle = resize => {
  if (resize === 'auto') {
    return css`
      /* Place on top of each other */
      grid-area: 1 / 1 / 2 / 2;

      /* Firefox shows scrollbar on growth, you can hide like this. */
      overflow: hidden;

      resize: none;
    `;
  }
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

export const StyledTextArea = styled.textarea`
  ${inputStyle}
  ${props => props.resize !== undefined && resizeStyle(props.resize)}
  ${props => props.fillArg && 'height: 100%;'}
  ${props => props.plain && plainStyle}
  ${props => props.resize === 'auto' && autoStyle}
  ${props =>
    props.disabled &&
    disabledStyle(
      props.theme.textArea.disabled && props.theme.textArea.disabled.opacity,
    )}
  ${props => props.theme.textArea && props.theme.textArea.extend};
`;

StyledTextArea.defaultProps = {};
Object.setPrototypeOf(StyledTextArea.defaultProps, defaultProps);

export const GrowWrap = styled.div`
  /* easy way to plop the elements on top
     of each other and have them both sized
    based on the tallest one's height */
  display: grid;

  ::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) " ";

    /* Place on top of each other */
    grid-area: 1 / 1 / 2 / 2;

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;

    font: inherit;

    ${inputStyle}
    ${props =>
    props.disabled &&
    disabledStyle(
      props.theme.textArea.disabled && props.theme.textArea.disabled.opacity,
    )}
    ${props => props.theme.textArea && props.theme.textArea.extend};
  }
`;

GrowWrap.defaultProps = {};
Object.setPrototypeOf(GrowWrap.defaultProps, defaultProps);
