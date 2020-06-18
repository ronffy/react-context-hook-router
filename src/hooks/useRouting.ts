/**
 * @description 
 * @author ronffy
 * @Date 2020-06-18 14:44:31
 * @LastEditTime 2020-06-18 17:45:05
 * @LastEditors ronffy
 */

import { useMemo } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { History, Location } from 'history';

interface Routing {
  location: Location
  params: {
    [propName: string]: string
  }
}

export default function useRouting(): [Routing, History] {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const routing = useMemo(() => ({
    location, 
    params,
  }), [location, params]);
  return [routing, history];
}
