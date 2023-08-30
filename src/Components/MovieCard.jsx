import { Card, CardBody, CardFooter, CardHeader, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
        <Card color="white">
           <CardHeader>
            <Text>{movie.Year}</Text>
           </CardHeader>

           <CardBody>
            <Img src={movie.Poster !== 'N/A' ? movie.Poster : 'https//via.placeholder.com/400'}></Img>
           </CardBody>

           <CardFooter>
           <Text>{movie.Type}</Text>
           <Text>{movie.Title}</Text>
           </CardFooter>   
        </Card>
    </SimpleGrid>
  )
}

export default MovieCard;