import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Image, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  return (
      <Card color="white" bg="orange.400" my="30px" p="20px" maxW="100%" h="100%" w="100%" borderRadius="lg" overflow="hidden" _hover={{ boxShadow: 'lg' }}>
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

        <CardFooter className='cardbottom'>
          <span>{movie.Type}</span>
          <Text>{movie.Title}</Text>
        </CardFooter>
      </Card>
  );
};

export default MovieCard;