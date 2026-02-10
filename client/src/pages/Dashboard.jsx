import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/layout/Navigation";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/user/all");
        setUsers(response.data.users);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navigation />

      {isLoading && <p>Loading...</p>}
      {users.map((user) => (
        <div key={user._id}>{user.name}</div>
      ))}
    </>
  );
};

export default Dashboard;
