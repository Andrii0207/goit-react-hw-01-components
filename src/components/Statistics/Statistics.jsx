import PropTypes from 'prop-types';
import { Stats } from './Stats';

function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <Stats label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
