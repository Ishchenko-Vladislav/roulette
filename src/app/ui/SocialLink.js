import React from "react";

export const SocialLink = ({ img, link }) => {
  return (
    <a className="px-10 hover:opacity-75 xl:px-4" href={link}>
      <img src={img} />
    </a>
  );
};
