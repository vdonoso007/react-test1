import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function MyDialog(props) {
  const classes = useStyles();
  const { onClose, open, shopers, selectedShoper } = props;

  const handleClose = () => {
    onClose(selectedShoper);
  };

  const handleListItemClick = (value) => {

    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {
          shopers.map((shoper) => (
            <ListItem button onClick={() => handleListItemClick(shoper)} key={shoper.email}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
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
