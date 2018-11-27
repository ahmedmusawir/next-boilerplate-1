import styled from 'styled-components';
import { baseHeadingStyles } from 'components/general/base_styles';

export const H3 = styled.h3`
  ${baseHeadingStyles};
  font-family: ${props => (props.font ? props.font : props.theme.headingFont)};
  color: ${props => (props.color ? props.color : props.theme.primaryColor)};
`;

export default H3;
