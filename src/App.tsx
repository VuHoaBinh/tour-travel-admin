import { ErrorBoundary } from 'components';
import { AppContainer } from 'containers';
import { AuthLayout, PrivateLayout } from 'layouts';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'reducers/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
              <Route path='/auth/*' element={<AuthLayout />} />
              <Route path='/*' element={<PrivateLayout />} />
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  );
};

export default App;
