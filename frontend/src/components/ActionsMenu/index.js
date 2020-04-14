/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdVisibility, MdCreate, MdDeleteForever } from 'react-icons/md';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ProblemModal from '~/pages/Problem/Modal';
import DeliveryModal from '~/pages/Delivery/Modal';

import { Container, ContainerModal, Badge, Menu, MenuItem } from './styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    fullWidth: true,
    maxWidth: 'lg',
  },
}));

function ActionsMenu(props) {
  const [visible, setVisible] = useState(false);
  const {
    see,
    del,
    edit,
    delText,
    editText,
    editFunction,
    modal,
    delFunction,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    console.tron.log(`clicked handleOpen ${modal}`);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleVisible}>...</Badge>
      <Menu visible={visible}>
        <MenuItem visible={see} onClick={handleOpen}>
          {modal !== 'problem' && <MdVisibility color="#8E5BE8" size={18} />}
          {modal === 'problem' && <MdCreate color="#4D85EE" size={18} />}
          Visualizar
        </MenuItem>
        <MenuItem visible={edit} onClick={editFunction}>
          <MdCreate color="#4D85EE" size={18} />
          {editText || 'Editar'}
        </MenuItem>
        <MenuItem visible={del} onClick={delFunction}>
          <MdDeleteForever color="#DE3B3B" size={18} />
          {delText || 'Excluir'}
        </MenuItem>
      </Menu>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          full
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <ContainerModal>
              {modal === 'problem' && <ProblemModal />}
              {modal === 'delivery' && <DeliveryModal />}
            </ContainerModal>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
}

function TransitionsModal() {}

export { TransitionsModal, ActionsMenu };
