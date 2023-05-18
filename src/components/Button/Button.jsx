import PropTypes from 'prop-types';

import { ButtonWrap, LoadMoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonWrap>
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </ButtonWrap>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
