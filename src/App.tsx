import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Address, Resturant} from "./model/resturant"
import BestMenu from './BestMenu';

let data:Resturant = {
  name : '누나네 식당',
  category:'western',
  address:{
    city:'incheoi',
    detail:'somewhere',
    zipCode:23425634
  },
  menu:[{name:'rose pasta', price:2000, category:"pasta"},{name:'rose pasta', price:2000, category:"pasta"}]
}

let test:string = 'adgs';

const App:React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Resturant>(data);
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant, address:address})
  }

  const showBestMenuName = (name:string):string => {
    return name;
  }

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
