import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
