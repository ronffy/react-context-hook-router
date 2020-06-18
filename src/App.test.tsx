/**
 * @description 
 * @author ronffy
 * @Date 2020-06-09 15:00:58
 * @LastEditTime 2020-06-18 17:33:46
 * @LastEditors ronffy
 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App>test</App>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
