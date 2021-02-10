import React, { useReducer } from 'react'
import './App.css';
import SimpleCard from './components/availabled-schedules';
import Addshoper from './components/add-shoper';

const initialState = [{email: 'shopper1@gmail.com', name: 'shopper1', status: 'F'}, 
                      {email: 'shopper2@gmail.com', name: 'shopper2', status: 'F'},
                      {email: 'shopper3@gmail.com', name: 'shopper3', status: 'F'},
                      {email: 'shopper4@gmail.com', name: 'shopper4', status: 'F'},
                      {email: 'shopper5@gmail.com', name: 'shopper5', status: 'F'},
                      {email: 'shopper6@gmail.com', name: 'shopper6', status: 'F'},
                      {email: 'shopper7@gmail.com', name: 'shopper7', status: 'F'} ];

const initialStateSchedules = []                      

const reducer = (state, action ) => {
  switch (action.operation) {
    case 'add':
      return [ ...state, action.shoper ]
    case 'reset':
      return initialState
    default:
      return state
  }
}

const schedulesReducer = (state, action) => {
  switch (action.operation) {
    case 'setSchedules':
      return [ ...state, action.schedules ]
      //return action.schedules
    case 'updateStatus':
      
      return;
  
    default:
      return state;
  }

}

export const ShopersContext = React.createContext()

function App() {
  const [shopers, dispatch] = useReducer(reducer, initialState)
  const [schedules, dispatchSchedules] = useReducer(schedulesReducer, initialStateSchedules)
  return (
    <div className="App">
      <header className="App-header">
        <ShopersContext.Provider value={{ shopersState: shopers, shopersDispatch: dispatch, schedulesState: schedules, schedulesDispatch: dispatchSchedules }}>
          <Addshoper />
          <SimpleCard />
        </ShopersContext.Provider>
      </header>
    </div>
  );
}

export default App;
