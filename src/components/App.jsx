import { data, user, friends } from '../data/index';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title={'Upload stats'} />
      <FriendList friends={friends} />
    </div>
  );
};

// import Profile from './Profile/Profile';
// import Statistics from './Statistics/Statistics';
// import FriendList from './FriendList/FriendList';
