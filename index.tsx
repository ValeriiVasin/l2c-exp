import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BoostGroup, boosts } from './boost';

const groups = Object.keys(BoostGroup);

const App = () => (
  <table>
    <tr>
      <th>image</th>
      <th>name</th>
      <th>EXP</th>
      <th>SP</th>
      <th>Group</th>
    </tr>
    {boosts.map(boost => {
      return (
        <tr>
          <td>
            <img src={boost.image} />
          </td>
          <td>{boost.name}</td>
          <td>{`${boost.exp}%`}</td>
          <td>{`${boost.sp}%`}</td>
          <td>{boost.group}</td>
        </tr>
      );
    })}
  </table>
);

render(<App />, document.getElementById('app'));
