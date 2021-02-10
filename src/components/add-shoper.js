import React, {useContext, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { ShopersContext } from '../App';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function Addshoper() {
    const shopersContext = useContext(ShopersContext)
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleNameInput = (event) => {
        setName(event.target.value)
    }
    
    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="email" label="email" variant="outlined" value={name} onChange={handleNameInput} />
            <TextField id="names" label="names" variant="outlined" value={email} onChange={handleEmailInput} />
            <Button variant="contained" color="primary" onClick={() => shopersContext.shopersDispatch({operation: 'add', shoper: { email: email, name: name, status: 'F' } })}>
                Add Shoper
            </Button>
        </form>
    )
}

export default Addshoper
