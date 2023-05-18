import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { ImageItem, ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { fetchImage } from 'api';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.imagesName !== this.props.imagesName) {
      this.setState(() => ({ images: [] }));
    }

    if (
      prevProps.imagesName !== this.props.imagesName ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ status: 'pending', error: null });
      try {
        const fetchedImage = await fetchImage(
          this.props.imagesName,
          this.props.page
        );
        if (fetchedImage.length === 0) {
          throw new Error();
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImage],
        }));
        this.setState({ status: 'resolved' });
      } catch (error) {
        this.setState({ error: 'No images', status: 'rejected' });
      }
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { images, status } = this.state;

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
          <Button onClick={this.props.handleNextPage} />
        </>
      );
    }

    if (status === 'rejected') {
      return <p>{this.state.error}</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }
  }
}
