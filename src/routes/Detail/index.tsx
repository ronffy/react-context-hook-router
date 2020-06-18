/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 16:35:47
 * @LastEditTime 2020-06-18 17:49:31
 * @LastEditors ronffy
 */
import * as React from 'react';
import {useContext} from 'react';
import AppContext from 'AppContext';

export interface DetailProps {

}

const Detail: React.SFC<DetailProps> = () => {

  const { history, routing } = useContext(AppContext);
  console.log('Detail', routing.location);

  const handleClick = () => {
    history.push('./about')
  }

  return (
    <div onClick={handleClick}>Detail</div>
  );
}

export default Detail;