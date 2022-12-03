import PropTypes from 'prop-types';
import Stats from './Stats';

function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <Stats label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
