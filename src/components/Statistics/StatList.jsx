import PropTypes from 'prop-types';
import { Stats } from './Stats';

function StatList(items) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <Stats label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatList;
