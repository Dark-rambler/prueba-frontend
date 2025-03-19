import "./App.css";
import ChuckNorrisJokes from "./components/ChuckNorrisJokes";
import MainLayout from "./layouts/main-layout";

function App() {

  return (
      <MainLayout>
        <ChuckNorrisJokes/>
      </MainLayout>
  );
}

export default App;
