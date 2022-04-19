import React from 'react';
import { Elements } from 'prismic-reactjs';

// Function to add a unique key to props.
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

// HTML Serializer
// This function changes the way that the HTML is loaded.
export const htmlSerializer = function (type, element, content, children, key) {
  let props = {};

  switch (type) {
    // Add paragraph elements
    case Elements.paragraph:
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign(
        {
          color: 'red.600',
          href: element.data.url,
        },
        targetAttr,
        relAttr
      );
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    default:
      return null;
  }
};
