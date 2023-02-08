import { Text, Box } from "@chakra-ui/react";

const Sponsors = () => {
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
          Sponsors
        </Text>
        <Text
          mt="-5px"
          mb="3vh"
          ml="5vmin"
          mr="5vmin"
          fontSize="xl"
          fontFamily="monospace"
        >
          Object Computing
          <br />
          T-Rex
          <br />
          NISC
          <br />
          Starburst
          <br />
          ArchitectNow
          <br />
          1904 Labs
          <br />
          SIUE Graduate School
        </Text>
      </Box>
    </Box>
  );
};

export default Sponsors;
