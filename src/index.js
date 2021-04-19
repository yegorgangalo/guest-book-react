import { RecoilRoot } from 'recoil';
// import RecoilizeDebugger from 'recoilize';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from 'components/Spinner';
import 'index.css';

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<Spinner />}>
        {/* <RecoilizeDebugger /> */}
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root'),
);
