import Header from "./components/Header";
import Info from "./components/Info";
import Search from "./components/Search";
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Info />
      <Search />
      <Loader />
      <Weather />
      <WeatherDetails />
    </div>
  );
};

export default App;
