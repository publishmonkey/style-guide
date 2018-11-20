import get from 'lodash/get';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Label = styled.div.attrs({
  backgroundColor: ({ backgroundColor, theme }) => (
    get(theme.colors, backgroundColor, backgroundColor)
  ),
  title: ({ children }) => children,
})`
  display: inline-block;
  padding: 4px 6px;
  border-radius: 5px;

  max-width: 10em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #ffffff;

  text-transform: uppercase;
  font-size: 11px;
  font-family: sans-serif;
  font-weight: 600;

  cursor: default;
`;

Label.propTypes = {
  /**
   * The background color of label being displayed: either a color from the
   * theme or a CSS color.
   */
  backgroundColor: PropTypes.string,
  /**
   * The text label that will be displayed.
   */
  children: PropTypes.string.isRequired,
};

Label.defaultProps = {
  backgroundColor: '#777777',
};

/** @component */
export default Label;
