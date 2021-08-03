import { useEffect } from 'react';
import Spinner from './Components/Spinner';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUser } from './redux/user/creators';
import { userSelector } from './redux/user/userSlice';
import Routes from './routes/Routes';

function App() {
  const {user, fetched, loading} = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!user && !fetched) {
      dispatch(fetchUser())
    }
  }, [user])
  
  return (
    <div>
      {loading ? 
        <Spinner />
      :
        <Routes />
      }
    </div>
  );
}

export default App;
