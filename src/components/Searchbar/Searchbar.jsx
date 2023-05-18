import { Formik, ErrorMessage } from 'formik';
import { Component } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Header, SearchForm, SearchInput, SubmitBtn } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleImagesChange = event => {
    this.setState({ imagesName: event.currentTarget.value });
  };

  handleSubmit = () => {
    if (this.state.imagesName.trim() === '') {
      alert('Введіть значеня');
      return;
    }
    this.props.onSubmit(this.state.imagesName.toLowerCase());
    this.setState({ imagesName: '' });
  };

  render() {
    return (
      <Header>
        <Formik
          initialValues={{ name: 'jared' }}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit();
            resetForm();
          }}
        >
          <SearchForm autoComplete="off">
            <label htmlFor="search">
              <SearchInput
                type="text"
                name="search"
                onChange={this.handleImagesChange}
                value={this.state.imagesName}
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
  }
}
