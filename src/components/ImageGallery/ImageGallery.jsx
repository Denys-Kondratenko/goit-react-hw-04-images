import PropTypes from 'prop-types';

import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, useCallback } from 'react';
import { ImageItem, ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { fetchImage } from 'api';

export const ImageGallery = ({ imagesName, page, handleNextPage }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [imagesName]);

  const FetchAPI = useCallback(async () => {
    try {
      setError(false);
      setLoader(true);
      const fetchedImage = await fetchImage(imagesName, page);
      if (fetchedImage.length === 0) {
        throw new Error();
      }
      setImages(prevState => [...prevState, ...fetchedImage]);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      setError('No images');
    }
  }, [imagesName, page]);

  useEffect(() => {
    if (!imagesName) {
      return;
    }
    FetchAPI();
  }, [FetchAPI, imagesName]);

  return (
    <>
      {images.length !== 0 && (
        <ImageList>
          {images.map(item => (
            <ImageItem key={item.id}>
              <ImageGalleryItem item={item} />
            </ImageItem>
          ))}
        </ImageList>
      )}
      {loader && <Loader />}
      {images.length !== 0 && <Button onClick={handleNextPage} />}
      {error && <p>{error}</p>}
    </>
  );
};

ImageGallery.propTypes = {
  imagesName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};
