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
