import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  const size = 3;
  let rowIndex = 0;
  let columnIndex = 0;
  let rowBoxIndex = 0;
  let columnBoxIndex = 0;
  let sudokuArray = [];
  let id = 0;

  for (rowIndex = 0; rowIndex < size; rowIndex++) {
    sudokuArray[rowIndex] = [];
    for (columnIndex = 0; columnIndex < size; columnIndex++) {
      sudokuArray[rowIndex][columnIndex] = [];
      for (rowBoxIndex = 0; rowBoxIndex < size; rowBoxIndex++) {
        sudokuArray[rowIndex][columnIndex][rowBoxIndex] = [];
        for (columnBoxIndex = 0; columnBoxIndex < size; columnBoxIndex++) {
          sudokuArray[rowIndex][columnIndex][rowBoxIndex][columnBoxIndex] = id;
          id++;
        }
      }
    }
  }

  return (
    <div className="App">
      <Board sudokuArray={sudokuArray} />
    </div>
  );
}

export default App;
