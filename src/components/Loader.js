import loaderSVG from "../assets/loader.svg";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px 0" }}>
      <img src={loaderSVG} alt="Logo" style={{ width: "3rem" }}></img>
    </div>
  );
};

export default Loader;
