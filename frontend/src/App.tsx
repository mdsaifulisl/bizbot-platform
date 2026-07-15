import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initTheme } from './features/theme/themeSlice';
import AppRoutes from './routes/AppRoutes';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // অ্যাপ মাউন্ট হওয়ার সাথে সাথে লোকাল স্টোরেজ থেকে থিম ক্লাস (dark) html ট্যাগে বসিয়ে দেবে
    dispatch(initTheme());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;