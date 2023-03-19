import PropTypes from 'prop-types';
import { Tag } from '@chakra-ui/react';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Item } from './LessonItem.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LessonItem = ({ lesson }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (lesson.status !== 'unlocked') {
      const notify = () =>
        toast.info('The video is locked', {
          position: 'bottom-center',
          autoClose: 2000,
        });
      notify();
      return;
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Item onClick={openModal}>
        <div>
          <Tag colorScheme="blue">Lesson {lesson.order}</Tag>
          <p>{lesson.title}</p>
        </div>
        <ToastContainer />
      </Item>

      {showModal && (
        <Modal
          lessonNumber={lesson.order}
          link={lesson.link}
          poster={lesson.previewImageLink + '/lesson-' + lesson.order + '.webp'}
          title={lesson.title}
          onClose={closeModal}
        />
      )}
    </>
  );
};

LessonItem.propTypes = {
  lesson: PropTypes.object.isRequired,
};
