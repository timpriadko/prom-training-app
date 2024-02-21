import { FC } from 'react';
import Navigation from './components/molecules/Navigation';
import Form from './components/molecules/Form';

import './style.scss';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Navigation />
      <h1>Hello {name}!</h1>
      <Form />
    </div>
  );
};
