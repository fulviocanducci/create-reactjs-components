import { IComponentReturn } from './types';

export function fctComponent(
  name: string,
  extension: string
): IComponentReturn {
  return {
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

export function aFctComponent(
  name: string,
  extension: string
): IComponentReturn {
  return {
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
