import { React, useState } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Map from './components/Map';
import AddForm from './components/AddForm';

function App() {
  const lightTheme = createTheme({
    type: 'light',
  });

  const darkTheme = createTheme({
    type: 'dark',
  });
  const darkMode = useDarkMode(false);
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div>
        <Map />
        <AddForm />
      </div>
    </NextUIProvider>
  );
}

export default App;
