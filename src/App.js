import './App.css';
import LoadingComponent from './components/Loading/Loading';
import ErrorComponent from './components/Error/Error';
import DataComponent from './components/Data/Data';

function App() {
  return (
    <div className="container">
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
}

export default App;
