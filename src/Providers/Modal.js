import { createContext, useState } from 'react';

export const ModalContext = createContext({
  showNewTaskModal: false,
  handleCloseNewTaskModal: () => {},
  handleOpenNewTaskModal: () => {},
  showEditModal: false,
  handleCloseEditModal: () => {},
  handleOpenEditModal: () => {},
  showDeleteModal: false,
  handleCloseDeleteModal: () => {},
  handleOpenDeleteModal: () => {}
});

const ModalProvider = ({ children }) => {
  // new task modal methods
  const [showNewTaskModal, setshowNewTaskModal] = useState(false);
  const handleCloseNewTaskModal = () => setshowNewTaskModal(false);
  const handleOpenNewTaskModal = () => setshowNewTaskModal(true);

  // edit modal methods
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleOpenEditModal = () => setShowEditModal(true);

  // delete modal methods
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleOpenDeleteModal = () => setShowDeleteModal(true);

  return (
    <ModalContext.Provider
      value={{
        showNewTaskModal,
        handleOpenNewTaskModal,
        handleCloseNewTaskModal,
        showEditModal,
        handleOpenEditModal,
        handleCloseEditModal,
        showDeleteModal,
        handleCloseDeleteModal,
        handleOpenDeleteModal
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
