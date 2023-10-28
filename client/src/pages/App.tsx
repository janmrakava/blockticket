import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { changeLanguage } from '../features/languageSlice';
import './App.css';

function App() {
  const appLanguage = useSelector((state: RootState) => state.language.appLanguage);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Čus</h1>
    </>
  );
}

export default App;
