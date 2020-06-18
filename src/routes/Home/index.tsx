/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 16:35:47
 * @LastEditTime 2020-06-18 17:50:50
 * @LastEditors ronffy
 */
import * as React from 'react';
import {useContext} from 'react';
import AppContext from '../../AppContext';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
  const { history, routing} = useContext(AppContext);
  
  console.log('home', routing.location);

  const handleClick = () => {
    history.push('/detail');
  }

  return (
    <div onClick={handleClick}>Home</div>
  );
}

export default Home;