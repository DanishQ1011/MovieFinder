import { Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function MovieCard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
        <Card color="white">
           <CardHeader>
            <Text>Card Header</Text>
           </CardHeader>

           <CardBody>
            <Text>Card body</Text>
           </CardBody>

           <CardFooter>
           <Text>Card footer</Text>
           </CardFooter>   
        </Card>
    </SimpleGrid>
  )
}
