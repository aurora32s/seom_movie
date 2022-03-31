import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year
// https://yts.mx/api/v2/movie_details.json?movie_id={id}
