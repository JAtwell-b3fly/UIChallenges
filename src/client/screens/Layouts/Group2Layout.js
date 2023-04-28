import { Box, VStack, HStack, Container } from 'native-base';

export const Group2Layout = ({ headercomponent, categoryfilter, welcomesection, headinglabel, catalogboxsection, tilessection }) => {
    //Home Screen: (headingcomponent,categoryfilter,welcomesection,headinglabel,catalogboxsection,tilessection)
    //Product Listing Screen: (headingcomponent,categoryfilter,headinglabel,catalogboxsection)
    //Wishlist Screen: (headingcomponent,headinglabel,catalogboxsection)
    
    const isHomeScreen = welcomesection !== undefined;
    const isProductListingScreen = catalogboxsection !== undefined && !isHomeScreen;
    const isWishlistScreen = !isHomeScreen && !isProductListingScreen;

    return (
      <Container bg="lightBlue.100"  flex={1}>
        
        <VStack flex={1} space={4} alignItems="center">
          <Box>{headercomponent}</Box>
          <Box w="100%" px={4}>
            <HStack space={2} alignItems="center">
                {isHomeScreen && categoryfilter && <Box flex={1}>{categoryfilter}</Box>} // category filter for home screen only
                {isHomeScreen && welcomesection && <Box flex={5}>{welcomesection}</Box>} // welcome message for home screen only
            </HStack>
          </Box>
          <Box w="100%" px={4}>
             {headinglabel && (
              <Box>
                <Box py={2} borderBottomWidth={2}>
                  {headinglabel}
                </Box>
              </Box>
            )}  
            {catalogboxsection}
          </Box>
          { isHomeScreen && tilessection && (
            <Box w="100%" px={4}>
              <HStack space={4} alignItems="center">
                {tilessection}
              </HStack>
            </Box>
          )}
        </VStack>
      </Container>
  );
};