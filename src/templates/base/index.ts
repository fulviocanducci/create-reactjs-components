import { IComponentReturn } from './types';

/** Base - Component */
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
    return <div>${name}</div>
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
    return <div>${name}</div>
}

export default ${name};
`,
  };
}

/** Base - ContextApi */
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

/** base - typescript */
export function functionComponentTypescriptBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Component',
    extension: extension,
    content: `
import React from 'react';

interface ${name}Props { }

function ${name}({ }: ${name}Props) {
  return <div>${name}</div>;
}

export default ${name};
    `,
  };
}

export function arrowFunctionComponentTypescriptBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Component',
    extension: extension,
    content: `
import React, { FC } from 'react';

interface ${name}Props {}

const ${name}: FC<${name}Props> = ({ }:${name}Props) => {
  return <div>${name}</div>;
};

export default ${name};    
    `,
  };
}
export function functionContextTypescriptBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Context',
    extension: extension,
    content: `
import React, { createContext, ReactNode } from 'react';

interface ${name}ProviderProps {
  children: ReactNode;
}

interface ${name}Props { }

export const ${name}Context = createContext<${name}Props>({} as ${name}Props);

function ${name}Provider({ children }: ${name}ProviderProps) {  
  return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
}

export default ${name}Provider;`,
  };
}

export function arrowFunctionContextTypescriptBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    title: 'Context',
    extension: extension,
    content: `
import React, { createContext, FC, ReactNode } from 'react';

interface ${name}ContextProps { }

export const ${name}Context = createContext<${name}ContextProps>(
  {} as ${name}ContextProps
);

const ${name}Provider: FC<{ children: ReactNode }> = ({ children }) => {
return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
};

export default ${name}Provider;
`,
  };
}
