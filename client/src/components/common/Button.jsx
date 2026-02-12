const Button = ({ children }) => {
  const defaultStyles =
    "bg-indigo-400 px-4 py-2 rounded-lg text-white hover:bg-indigo-500 cursor-pointer text-md";

  return <button className={defaultStyles}>{children}</button>;
};

export default Button;
