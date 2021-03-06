import React from 'react';

export const EuiIconHome = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 14V6.43782L7.5 1.3609L2 6.43782L2 14H13ZM1.32172 5.70302C1.11664 5.89233 1 6.15873 1 6.43782V14C1 14.5523 1.44772 15 2 15H13C13.5523 15 14 14.5523 14 14V6.43782C14 6.15873 13.8834 5.89233 13.6783 5.70302L8.17828 0.626098C7.79522 0.272502 7.20478 0.272502 6.82172 0.626097L1.32172 5.70302Z"
    />
  </svg>
);

export const home = EuiIconHome;
