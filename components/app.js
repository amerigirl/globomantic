const { default: Banner } = require("./banner");
const { default: HouseList } = require("./houseList");

const App = () => {
  return (
    <>
      <Banner>Providing houses all over the world</Banner>
      <HouseList />
    </>
  );
};

export default App;
