import { Card, CardBody, CardFooter, CardHeader, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const MovieCard = ({movie1}) => {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
        <Card color="white">
           <CardHeader>
            <Text>{movie1.Year}</Text>
           </CardHeader>

           <CardBody>
            <Img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https//via.placeholder.com/400'}></Img>
           </CardBody>

           <CardFooter>
           <Text>{movie1.Type}</Text>
           <Text>{movie1.Title}</Text>
           </CardFooter>   
        </Card>
    </SimpleGrid>
  )
}

export default MovieCard;