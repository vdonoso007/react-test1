import React, {useState, useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyDialog from './dialog';

import { ShopersContext } from '../App';

const useStyles = makeStyles({
    root: {
      minWidth: 500,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-around',
        justifyItems: 'center'

    }
  });


function CardElement(props) {

    const shopersContext = useContext(ShopersContext)

    const classes = useStyles();
    const [selectedShoper, setSelectedShoper ] = React.useState(null)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        if (value) {
          setSelectedShoper(value);
          shopersContext.shopersDispatch({ operation: 'updateStatus', shoper: value })
          setSelectedShoper(null)
        }

      };

    
    

    return (
    <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Horario del Dia
          </Typography>
          <Typography variant="h5" component="h2">
            {props.time}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>Asignar Shoper</Button>
          <MyDialog selectedShoper={selectedShoper} shopers={shopersContext.shopersState} open={open} onClose={handleClose}></MyDialog>
        </CardActions>
      </Card>
      )

}

function Schedules(props) {

    const shopersContext = useContext(ShopersContext)
    const [i, setI] = useState()

    var from = props.from
    var to = props.to
    var steps = props.minutesSteps

    var fromDate = new Date(from)
    var toDate = new Date(to)

    useEffect(() => {

      const add_minutes =  (dt, minutes) => {
          return new Date(dt.getTime() + minutes*60000);
      }

      for(var i=fromDate; i<=toDate; i = add_minutes(i, steps) ) {
          setI(i)
          shopersContext.schedulesDispatch({operation: 'setSchedules', schedules: {timeAvailable: i} })
      }

    }, [])
    
    const listSchedules = shopersContext.schedulesState.map((item, index) => 
        <div key={index}> <CardElement time={item.timeAvailable.toLocaleTimeString() } /> <br></br>
        </div>
    )

    return (
        <div>{listSchedules}</div>
    )
    
}


export default function SimpleCard() {

    return (
        <Schedules from={"2021-02-02 08:30"} to={"2021-02-02 21:30"} minutesSteps={30} />
    )


    
}