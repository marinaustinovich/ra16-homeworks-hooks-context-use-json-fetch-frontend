import "./App.css";
import { DataFetchingComponent } from "./components";

const App = () => (
  <div className="container">
    <DataFetchingComponent
      url={process.env.REACT_APP_DATA_URL}
      title="Successful Request"
    />
    <DataFetchingComponent
      url={process.env.REACT_APP_ERROR_URL}
      title="Error Request"
      className="data-error"
    />
    <DataFetchingComponent
      url={process.env.REACT_APP_LOADING_URL}
      title="Loading Request"
      className="data-loading"
    />
  </div>
);

export default App;
