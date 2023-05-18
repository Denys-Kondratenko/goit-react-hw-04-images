import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imagesName: '',
    page: 1,
  };

  handleFormSubmit = imagesName => {
    this.setState({ imagesName, page: 1 });
  };

  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </Section>
        <Layout>
          <Section>
            <ImageGallery
              imagesName={this.state.imagesName}
              handleNextPage={this.handleNextPage}
              page={this.state.page}
            />
          </Section>
          <GlobalStyle />
        </Layout>
      </>
    );
  }
}
