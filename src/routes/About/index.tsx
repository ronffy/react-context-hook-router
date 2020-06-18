/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 16:35:47
 * @LastEditTime 2020-06-18 17:46:50
 * @LastEditors ronffy
 */
import * as React from 'react';
import {useContext} from 'react';
import AppContext from 'AppContext';

export interface AboutProps {

}

const About: React.SFC<AboutProps> = () => {

  const { history, routing } = useContext(AppContext);
  console.log('about', routing.location);

  const handleClick = () => {
    history.push({
      pathname: './home',
      search: 'zhangsan=123&lisi=345'
    })
  }

  return (
    <div onClick={handleClick}>about</div>
  );
}

export default About;