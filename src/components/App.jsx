import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import { data, user } from '../data/index';

export const App = () => {
  return (
    <div>
      <Profile user={user} />

      <Statistics stats={data} />
    </div>
  );
};
