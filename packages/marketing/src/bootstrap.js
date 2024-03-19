import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history'

// Mount function to startup the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  // If the container's onNavigate function is not null, add it to the 
  // subscriber of the history
  if (onNavigate)
  {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <App history={history} />, 
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot)
  {
    mount(devRoot, {});
  }
} 

// We are running thorugh container
// and we should export the mount function
export { mount };