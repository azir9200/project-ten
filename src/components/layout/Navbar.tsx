import { Link } from "react-router";
import { ModeToggle } from "../modeToggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-center gap-10 px-8 py-6 bg-purple-500">
      <div>
        {" "}
        <Link className="bg-gray-400 px-6 py-2" to="/task">
          Task
        </Link>
        <Link className="bg-gray-400 px-6 py-2" to="/quiz">
          Quiz
        </Link>
        <Link className="bg-gray-400 px-6 py-2" to="/user">
          Users
        </Link>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
