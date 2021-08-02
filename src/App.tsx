import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUser } from './redux/user/creators';
import { userSelector } from './redux/user/userSlice';
import Routes from './routes/Routes';

function App() {
  const {user, fetched} = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!user && !fetched) {
      dispatch(fetchUser())
    }
  }, [user])
  
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
