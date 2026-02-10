const Container = ({ children, className }) => {
  return (
    <div className={`max-w-6xl mx-auto px-8 sm:px-12 lg:px-18 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
