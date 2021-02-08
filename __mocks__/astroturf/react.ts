/* eslint-disable react/display-name */
import React, { ComponentClass, FunctionComponent } from 'react';

const noop = (): any => ({});

const convertProps = (props: any) => {
  const convertedProps: any = {};

  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'boolean') {
      if (value) {
        convertedProps[key] = String(value);
      } else {
        convertedProps[key] = undefined;
      }
    } else {
      convertedProps[key] = value;
    }
  }

  return convertedProps;
};

export const styled = (
  type: FunctionComponent<any> | ComponentClass<any> | string,
): any => {
  const styledReact = React.forwardRef((props: any, ref: any) => {
    return React.createElement(type, { ...convertProps(props), ref });
  });

  function styledFunction() {
    return styledReact;
  }

  styledFunction.attrs = () => () => styledReact;

  return styledFunction;
};

export const css = noop;

export const withProps = (): any => styled;

export default styled;
