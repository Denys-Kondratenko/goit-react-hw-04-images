import PropTypes from 'prop-types';

import { useState } from 'react';
import { Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const { largeImageURL, tags, webformatURL } = item;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Image
        onClick={() => toggleModal(largeImageURL)}
        src={webformatURL}
        alt={tags}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img loading="lazy" src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
