import { RecoilRoot } from 'recoil';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from 'components/Spinner';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'index.css';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Spinner />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);
