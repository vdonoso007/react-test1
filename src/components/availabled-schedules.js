import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyDialog from './dialog';

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

const shopers = [{email: 'shopper1@gmail.com', name: 'shopper1', status: 'F'}, 
                 {email: 'shopper2@gmail.com', name: 'shopper2', status: 'F'},
                 {email: 'shopper3@gmail.com', name: 'shopper3', status: 'F'},
                 {email: 'shopper4@gmail.com', name: 'shopper4', status: 'F'},
                 {email: 'shopper5@gmail.com', name: 'shopper5', status: 'F'},
                 {email: 'shopper6@gmail.com', name: 'shopper6', status: 'F'},
                 {email: 'shopper7@gmail.com', name: 'shopper7', status: 'F'} ];



function CardElement(props) {

    const classes = useStyles();
    const [selectedShoper, setSelectedShoper ] = React.useState()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedShoper();
        shopers.forEach(element => {
            if (value != null && element.email === value.email) {
                element.status = element.status === 'F' ? 'A' : 'F'
            }
        });


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
          <MyDialog selectedShoper={selectedShoper} shopers={shopers} open={open} onClose={handleClose}></MyDialog>
        </CardActions>
      </Card>
      )

}

var add_minutes =  function (dt, minutes) {
    return new Date(dt.getTime() + minutes*60000);
}

function Schedules(props) {

    const items = []

    var from = props.from
    var to = props.to
    var steps = props.minutesSteps

    var fromDate = new Date(from)
    var toDate = new Date(to)

    var idx =0;
    for(var i=fromDate; i<=toDate; i = add_minutes(i, steps) ) {
        idx +=1;
        items.push({timeAvailable: i, idx: idx})
    }

    const listSchedules = items.map((item) => 
        <div key={item.idx}> <CardElement time={item.timeAvailable.toLocaleTimeString() } /> <br></br>
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