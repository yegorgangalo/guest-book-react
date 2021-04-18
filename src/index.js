import { QueryClient, QueryClientProvider } from 'react-query';

import { RecoilRoot } from 'recoil';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from 'components/Spinner';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Suspense fallback={<Spinner />}>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);
