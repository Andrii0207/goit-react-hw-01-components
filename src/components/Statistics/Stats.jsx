import PropTypes from 'prop-types';

function Stats({ label, percentage }) {
  return (
    <div className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
