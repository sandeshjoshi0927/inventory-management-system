import React from "react";
import { navigate } from "../../utils/navigate";

const Navigation = () => {
  const navItems = [
    { path: "/", name: "Home" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <ul>
        {navItems.map((item) => (
          <div key={item.path} onClick={() => handleClick(item.path)}>
            {item.name}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
