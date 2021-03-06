import { IComponentReturn } from './types';

/** Base - Component */
export function componentBase(name: string, extension: string): IComponentReturn {
  return {
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

export function statelessComponentBase(name: string, extension: string): IComponentReturn {
  return {
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
export function statelessContextBase(name: string, extension: string): IComponentReturn {
  return {
    extension: extension,
    content: `  
import React, { createContext } from "react";

const ${name}Context = createContext();

const ${name}Provider = ({ children }) => {
  return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
}

export default ${name}Provider;
`,
  };
}

export function contextBase(name: string, extension: string): IComponentReturn {
  return {
    extension: extension,
    content: `  
import React, { createContext } from "react";

const ${name}Context = createContext();

function ${name}Provider({ children }) {
  return (
    <${name}Context.Provider value={{ }}>
      {children}
    </${name}Context.Provider>
  );
}

export default ${name}Provider;
`,
  };
}

/** base - typescript */
export function componentTypescriptBase(name: string, extension: string): IComponentReturn {
  return {
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

export function statelessComponentTypescriptBase(
  name: string,
  extension: string
): IComponentReturn {
  return {
    extension: extension,
    content: `
import React from 'react';

interface ${name}Props {}

const ${name} = ({ }:${name}Props) => {
  return <div>${name}</div>;
};

export default ${name};    
    `,
  };
}
export function contextTypescriptBase(name: string, extension: string): IComponentReturn {
  return {
    extension: extension,
    content: `
import React, { createContext, ReactNode } from 'react';

interface ${name}ContextProps { }

interface ${name}ProviderProps {
  children: ReactNode;
}

export const ${name}Context = createContext<${name}ContextProps>({} as ${name}ContextProps);

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

export function statelessContextTypescriptBase(name: string, extension: string): IComponentReturn {
  return {
    extension: extension,
    content: `
import React, { createContext, ReactNode } from 'react';

interface ${name}ContextProps { }

interface ${name}ProviderProps { 
  children: ReactNode;
}

export const ${name}Context = createContext<${name}ContextProps>(
  {} as ${name}ContextProps
);


const ${name}Provider = ({ children }: ${name}ProviderProps) => {
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
