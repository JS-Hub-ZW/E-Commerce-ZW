import {
  Flex,
  Circle,
  Box,
  Image,
  Button,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const data = [
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=190&h=180&q=80",
    name: "Laptop",
    price: 599.0,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1536650731127-3b9ce7c98007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80https://images.unsplash.com/photo-1608156639585-b3a032ef9689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80",
    name: "Earphones",
    price: 5.99,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1533309907656-7b1c2ee56ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&h=400&q=80",
    name: "Drones",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&h=400&q=80",
    name: "Monitor",
    price: 244.5,
    rating: 4.2,
    numReviews: 34,
  },
];

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductAddToCart() {
  return (
    <Flex p={50} gap={6} w="full" alignItems="center" justifyContent="center">
      {data.map((item) => (
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="2px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          {item.data && (
            <Circle
              size="0px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}

          <Image
            src={item.imageURL}
            alt={`Picture of ${item.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {item.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2px"}
              >
                <chakra.a href={"#"} display={"flex"}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={item.rating} numReviews={item.numReviews} />
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  £
                </Box>
                {item.price.toFixed(2)}
              </Box>
            </Flex>
            <Button colorScheme="purple" mt="4">
              Add to Cart
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default ProductAddToCart;
