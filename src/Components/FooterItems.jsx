import React from "react";

const FooterItems = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
}) => {
  const commonStyles = ``;

  return (
    <div>
      <ul>
        <li>
          <a href={{ link1 }}>{tag1}</a>
        </li>
        <li>
          <a href={{ link2 }}>{tag2}</a>
        </li>
        <li>
          <a href={{ link3 }}>{tag3}</a>
        </li>
        <li>
          <a href={{ link4 }}>{tag4}</a>
        </li>
        <li>
          <a href={{ link5 }}>{tag5}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterItems;
