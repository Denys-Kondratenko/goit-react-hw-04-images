import PropTypes from 'prop-types';

import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, useCallback } from 'react';
import { ImageItem, ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { fetchImage } from 'api';

export const ImageGallery = ({ imagesName, page, handleNextPage }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setImages([]);
  }, [imagesName]);

  const FetchAPI = useCallback(async () => {
    try {
      const fetchedImage = await fetchImage(imagesName, page);
      if (fetchedImage.length === 0) {
        throw new Error();
      }
      setImages(prevState => [...prevState, ...fetchedImage]);
      setStatus('resolved');
    } catch (error) {
      setError('No images');
      setStatus('rejected');
    }
  }, [imagesName, page]);

  useEffect(() => {
    if (!imagesName) {
      return;
    }
    setStatus('pending');
    setError(null);
    FetchAPI();
  }, [FetchAPI, imagesName]);

  if (status === 'resolved') {
    return (
      <>
        <ImageList>
          {images &&
            images.map(item => (
              <ImageItem key={item.id}>
                <ImageGalleryItem item={item} />
              </ImageItem>
            ))}
        </ImageList>
        <Button onClick={handleNextPage} />
      </>
    );
  }

  if (status === 'rejected') {
    return <p>{error}</p>;
  }

  if (status === 'pending') {
    return <Loader />;
  }
};

ImageGallery.propTypes = {
  imagesName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};
