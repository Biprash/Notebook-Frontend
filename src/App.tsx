import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUser } from './redux/user/creators';
import { userSelector } from './redux/user/userSlice';
import Routes from './routes/Routes';

function App() {
  const {user} = useAppSelector(userSelector)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser())
    }
  }, [user])
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes />
    </div>
  );
}

export default App;
