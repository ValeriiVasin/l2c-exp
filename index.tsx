import React, { Fragment, SFC } from 'react';
import { render } from 'react-dom';
import { boosts, Boost, BoostGroup, groups, byGroup } from './boost';
import classNames from 'classnames';

const Row: SFC<{ boost: Boost }> = ({ boost }) => {
  return (
    <tr key={boost.id}>
      <td>
        <input
          type="checkbox"
          checked={false}
          onChange={() => console.log('change', boost.id)}
        />
      </td>
      <td>
        <img src={boost.image} />
      </td>
      <td>{boost.name}</td>
      <td>{`${boost.exp}%`}</td>
      <td>{`${boost.sp}%`}</td>
      <td>{boost.group}</td>
    </tr>
  );
};

const Group: SFC<{ boosts: Boost[]; odd: boolean }> = ({ boosts, odd }) => {
  return (
    <tbody className={classNames({ ['pure-table-odd']: odd })}>
      {boosts.map(boost => (
        <Row boost={boost} key={boost.id} />
      ))}
    </tbody>
  );
};

const App = () => (
  <table className="pure-table">
    <thead>
      <tr>
        <th>#</th>
        <th>image</th>
        <th>name</th>
        <th>EXP</th>
        <th>SP</th>
        <th>Group</th>
      </tr>
    </thead>
    {groups.map((group, index) => (
      <Group key={group} boosts={byGroup[group]} odd={index % 2 === 1} />
    ))}
  </table>
);

render(<App />, document.getElementById('app'));
