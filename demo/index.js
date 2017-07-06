import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}