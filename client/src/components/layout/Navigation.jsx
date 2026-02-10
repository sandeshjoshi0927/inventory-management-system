import { useNavigate } from "react-router-dom";
import { navItems } from "../../constants/navItems";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const logout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found!");
    }

    localStorage.removeItem("token");
    navigate("login");
  };

  return (
    <div>
      <ul className="flex items-center justify-between bg-red-300">
        {navItems.map((item) => (
          <div key={item.path} onClick={() => handleClick(item.path)}>
            {item.name}
          </div>
        ))}

        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={logout()}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
