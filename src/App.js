import './App.css';
import ParticleBg from './components/ParticleBg';
import MovieCard from './components/MovieCard';
import { Container, Heading, Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


//db9b2282 - OMDb API 

  

  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=db9b2282';

  const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      //searchMovies();
    }, [searchTerm]);

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
    
      setMovies(data.Search);
    }

    
  return (
    <>
    <ParticleBg />
    
    <Container alignItems="center">
        <Heading fontSize="45px" textAlign="center" color="orange" mt="50px">
          Movie Finder
        </Heading>
        <Center>
          <form action="/search" method="GET">
            <div class="search-container">
              <input 
                type="text" 
                class="custom-input" 
                name="q" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
              <button 
                class="search-button" 
                type="submit"
                onClick={() => searchMovies(searchTerm)}>
                <svg class="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l4 3.9 2.3-2.3-3.9-4zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
                </svg>
              </button>
            </div>
          </form>
        </Center>
    </Container>

    {
      movies?.length > 0
      ?(
        <Container>
          {movies.map((movie) => (
            <MovieCard movie={movie}/>
          ))}
        </Container>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )

    }

    
    </>
  
  );
}
export default App;
