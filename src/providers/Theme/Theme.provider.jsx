import React from 'react';

export const themes = {
    blackColor: '#000000',
    whiteColor: '#ffffff',
    cremaColor: '#e5dac5',
};

const ThemeContext = React.createContext({
  currentTheme: themes,
  updateCurrentTheme: () => {},
});

export default ThemeContext;
