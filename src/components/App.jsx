import Profile from './Profile/Profile';
import user from './Profile/user.json';
// import StatList from './Statistics/Statistics';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      {/* <StatList label={data.label} percentage={data.percentage} /> */}
      <Statistics stats={data} />
    </div>
  );
};
