import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(12);

  const handleFormSubmit = imagesName => {
    setImagesName(imagesName);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Section>
        <Searchbar onSubmit={handleFormSubmit} />
      </Section>
      <Layout>
        <Section>
          <ImageGallery
            imagesName={imagesName}
            handleNextPage={handleNextPage}
            page={page}
          />
        </Section>
        <GlobalStyle />
      </Layout>
    </>
  );
};
