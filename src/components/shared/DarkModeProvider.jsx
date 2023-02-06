import React, { createContext, useContext } from 'react';

const DarkMode = createContext();

// wrap everything into DarkModeProvider
function DarkModeProvider({ children, dark }) {
  return (
    <DarkMode.Provider value={dark}>
      <div id="App__container" className={dark ? 'dark-mode' : null}>
        { children }
      </div>
    </DarkMode.Provider>
  );
}

/** Wrap useContext into a hook to make it easy to use
 * File Top Level ==> import useDarkMode from '[path-to-this-file]';
 * Component Top Level ===> const yourVariableName = useDarkMode();
 */
function useDarkMode() {
  return useContext(DarkMode);
}

export { DarkModeProvider, useDarkMode };