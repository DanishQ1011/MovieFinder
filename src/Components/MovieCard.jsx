import React from 'react';
import { Box, Card, CardBody, CardFooter, CardHeader, Image, SimpleGrid, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  return (
    <Box maxW="sm">
      <Card color="white" maxW="100%" h="100%" w="100%" borderRadius="lg" overflow="hidden" _hover={{ boxShadow: 'lg' }}>
        <CardHeader>
          <Text>{movie.Year}</Text>
        </CardHeader>

        <CardBody>
          <Image
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
            alt={movie.Title}
            maxH="300px" // Reduce the image size as needed
          />
        </CardBody>

        <CardFooter>
          <Text>{movie.Type}</Text>
          <Text>{movie.Title}</Text>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default MovieCard;