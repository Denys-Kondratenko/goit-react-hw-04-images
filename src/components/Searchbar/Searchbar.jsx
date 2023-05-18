import PropTypes from 'prop-types';

import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Header, SearchForm, SearchInput, SubmitBtn } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [imagesName, setImagesName] = useState('');

  const handleImagesChange = event => {
    setImagesName(event.currentTarget.value);
  };

  const handleSubmit = () => {
    if (imagesName.trim() === '') {
      alert('Введіть значеня');
      return;
    }
    onSubmit(imagesName.toLowerCase());
    setImagesName('');
  };

  return (
    <Header>
      <Formik
        initialValues={{ name: 'jared' }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit();
          resetForm();
        }}
      >
        <SearchForm autoComplete="off">
          <label htmlFor="search">
            <SearchInput
              type="text"
              name="search"
              onChange={handleImagesChange}
              value={imagesName}
              placeholder="Search images and photos"
            />
            <ErrorMessage name="name" component="p" />
          </label>
          <SubmitBtn type="submit">
            <IoSearchOutline size={16} />
          </SubmitBtn>
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
