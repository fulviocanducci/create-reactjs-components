import { IComponentReturn } from './types';

export function functionComponentBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Component',
    extension: extension,
    content: `
import React from 'react';

function ${name}() {
    return (
        <div>${name}</div>
    )
}

export default ${name};
`,
  };
}

export function arrowFunctionComponentBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Component',
    extension: extension,
    content: `
import React from 'react';

const ${name} = () => {
    return (
        <div>${name}</div>
    )
}

export default ${name};
`,
  };
}

export function createContextArrowFunctionBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Context',
    extension: extension,
    content: `  
import React, { createContext } from "react";

const ${name}Context = createContext();

const ${name}ContextProvider = ({ children }) => {
  return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
}

export default ${name}ContextProvider;
`,
  };
}

export function createContextFunctionBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Context',
    extension: extension,
    content: `  
import React, { createContext } from "react";

const ${name}Context = createContext();

function ${name}ContextProvider({ children }) {
  return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
}

export default ${name}ContextProvider;
`,
  };
}
