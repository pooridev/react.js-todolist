import { createContext, useState } from 'react';

export const ModalContext = createContext({
  showNewTaskModal: false,
  setshowNewTaskModal: () => {},
  handleCloseNewTaskModal: () => {},
  showEditModal: false,
  setShowEditModal: () => {},
  handleCloseEditModal: () => {},
  showDeleteModal: false,
  setShowDeleteModal: () => {},
  handleCloseDeleteModal: () => {}
});

const ModalProvider = ({ children }) => {
  // new task modal methods
  const [showNewTaskModal, setshowNewTaskModal] = useState(false);
  const handleCloseNewTaskModal = () => setshowNewTaskModal(false);

  // edit modal methods
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  // delete modal methods
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  return (
    <ModalContext.Provider
      value={{
        showNewTaskModal,
        setshowNewTaskModal,
        handleCloseNewTaskModal,
        showEditModal,
        setShowEditModal,
        handleCloseEditModal,
        showDeleteModal,
        setShowDeleteModal,
        handleCloseDeleteModal
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
