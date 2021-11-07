import * as React from 'react';
import {useContext} from 'react';
import { GlobalStoreContext } from '../store'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    const handleClose = () => {
        store.unmarkListForDeletion();
    };
    const handleDeleteList = () =>{
        store.deleteMarkedList();
    }
    let listname = ""
    if(store.listMarkedForDeletion)
        listname = store.listMarkedForDeletion.name;
    return (
        <div>
            <Modal
            open={store.isDeleteModalOpen}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="delete-modal-text">Delete Top5 {listname} List</h2>
                <Button onClick = {handleClose}> Close </Button>
                <Button onClick = {handleDeleteList}> Confirm </Button>
            </Box>
            </Modal>
        </div>
    );
  }