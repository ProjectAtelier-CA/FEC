import React, { createContext, useContext } from 'react';

const Props = createContext();

function PropsProvider({ children, ...props }) {
  return (
    <Props.Provider value={props}>
      { children }
    </Props.Provider>
  );
}

function useProps() {
  const props = useContext(Props);

  if (props === undefined) {
    throw new Error('useProps must be used under a PropsProvider');
  }

  return props;
}

export { PropsProvider, useProps };
