import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import MovieDetails from './components/homepage/MovieDetails';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movie" element={<Homepage />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
    </div>
  );
}

export default App;
