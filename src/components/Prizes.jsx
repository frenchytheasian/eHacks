import { Text, Box } from "@chakra-ui/react";

const Prizes = () => {
  return (
    <Box
      mb="30vh"
      justifyContent="top"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text fontSize="6xl" fontFamily="monospace">
          Prizes
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          Over $2,000 value of prizes given to winning teams! Smaller value
          prizes given to some hackers in attendance. Anyone registered by the
          priority registration deadline gets a t-shirt and other swag!
        </Text>
      </Box>
    </Box>
  );
};

export default Prizes;
