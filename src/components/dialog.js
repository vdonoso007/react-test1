import React, { } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export default function MyDialog(props) {
  
  const { onClose, open, shopers, selectedShoper } = props;

  const handleClose = () => {
    //onClose(selectedShoper)
    onClose()
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const data = shopers.filter((item) => item.status === 'F')

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {
          data.map((shoper, index) => (
            <ListItem button onClick={() => handleListItemClick(shoper)} key={shoper.email}>
              <ListItemAvatar>
                <Avatar alt="Natacha" src={`/static/images/avatar/${index+1}.jpg`} />
                {/* <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar> */}
              </ListItemAvatar>
          <ListItemText>{shoper.email} - {shoper.name} - {shoper.status}</ListItemText>
            </ListItem>
          ))
        }

      </List>
    </Dialog>
  );
}

MyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedShoper: PropTypes.object
};
