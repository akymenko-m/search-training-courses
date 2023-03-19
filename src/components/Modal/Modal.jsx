import { useEffect } from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import { Overlay, ModalStyled } from './Modal.styled';

export const Modal = ({ lessonNumber, title, link, poster, onClose }) => {
  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay className="Overlay" onClick={handleBackdropClick}>
      <ModalStyled className="Modal">
        <VideoPlayer
          lessonNumber={lessonNumber}
          title={title}
          link={link}
          poster={poster}
        />
      </ModalStyled>
    </Overlay>
  );
};

Modal.propTypes = {
  lessonNumber: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  poster: PropTypes.string,
  onClose: PropTypes.func,
};
