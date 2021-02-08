declare module 'identity-obj-proxy' {
  type proxyObject = Record<string, unknown>;

  export default proxyObject;
}

declare module '*.css' {
  export default interface ClassNames {
    [className: string]: string;
  }
}
