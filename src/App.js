import './App.css';
import ParticleBg from './components/ParticleBg';
import MovieCard from './components/MovieCard';
import { Container, Heading, Center, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
  

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred while fetching data.');
    }
  };

  useEffect(() => {
    // Initially, you might want to load some default movies.
    // searchMovies('Batman'); // Uncomment this line to load default movies.
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  return (
    <>
      <Container alignItems="center">
        <Heading fontSize="45px" textAlign="center" color="orange" mt="50px">
          Movie Finder
        </Heading>
        <Center>
          <div className="search-container">
            <input
              type="text"
              className="custom-input"
              name="q"
              placeholder="Search..."
              value={searchTerm}
              onKeyDown={handleKeyPress}
              onChange={(e) => { 
                setSearchTerm(e.target.value);
              }}
            />
            <button
              className="search-button"
              type="button"
              onClick={() => searchMovies(searchTerm)}
            >
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l4 3.9 2.3-2.3-3.9-4zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
              </svg>
            </button>
          </div>
        </Center>
      </Container>

      {error ? (
        <div className="empty">
          <h2>{error}</h2>
        </div>
      ) : (
        movies.length > 0 && (
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </Grid>
        )
      )}
    </>
  );
}

export default App;