import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-center gap-10 px-8 py-12 bg-purple-500">
      <Link className="bg-gray-400 px-6 py-2" to="/task">
        Task
      </Link>
      <Link className="bg-gray-400 px-6 py-2" to="/user">
        Users
      </Link>
    </nav>
  );
};

export default Navbar;
