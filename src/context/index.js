import {createContext, useContext} from 'react';

const createContext = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const onAuthStateChanged = newUser => {
    const getUser = async () => {
      const userFromDB = await getUserFromDB(newUser.uid);
      setUser(userFromDB);
    };
    newUser ? getUser() : setUser(null);
    initializing && setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return 
}

export const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
