import styled, { css } from 'styled-components';

import { baseStyle } from '../../utils';
import { defaultProps } from '../../default-props';

const fullStyle = css`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const StyledViewport = styled.div`
  ${props => !props.plain && baseStyle}
  ${props => props.full && fullStyle}
  ${props => props.theme.global.font.face}
  ${props => props.theme.viewport.extend}
  ${props =>
    props.cssVars &&
    Object.keys(props.theme.global.colors)
      .filter(k => typeof props.theme.global.colors[k] === 'string')
      .map(k => `--${k}: ${props.theme.global.colors[k]};`)
      .join('\n')}
`;

StyledViewport.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, defaultProps);

export { StyledViewport };
