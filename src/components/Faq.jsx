import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
} from "@chakra-ui/react";

const Faq = () => {
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
          FAQ
        </Text>
        <Accordion
          allowToggle
          allowMultiple
          width="70vw"
          fontFamily="monospace"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  What is a hackathon?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              A hackathon is an event where people come together to create
              something new. It is a place where you can meet new people and
              learn new skills!
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  How much coding experience do I need to participate?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Absolutely none! eHacks is open to participants of all skill
              levels as long as they are college students. We will have mentors
              available to help you with any questions you may have.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Who can come?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Anyone age 18 or older who is currently enrolled in a US college
              is able to attend. Applying to participate does not guarantee your
              application is accepted until we review it. You will receive an
              email if you are accepted.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  What does priority application mean?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Priority application means you will be guaranteed a free
              t-shirt and potentially other goodies if you are accepted.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Am I guaranteed to participate if I apply by the deadline?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              While eHacks is open to anyone who is currently enrolled in a US
              college, we still need to review your application to verify your
              eligibility, though it is highly likely if you are a US college
              student. We will notify you if you are accepted.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Why do you require resumes?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              eHacks starts out with a career fair. We collect resumes to share
              them with the sponsors, and potentially help you land a job or
              internship!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will there be food?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Yes! All of the meals will be provided at no charge to the
              participants over the course of the weekend. There will also be
              plenty of snacks and drinks available throughout as well.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  What should I bring?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              You should bring a laptop/something to code on, any chargers you
              might need, and anything you would bring on a two day trip
              (clothes, toiletries, etc.). We also recommend that you bring
              stuff to sleep on.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will sleeping accommodations be provided?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              Unfortunately, we will not be able to provide any sleeping
              accommodations. We recommend that if you plan on spending the
              night at the venue, that you bring sleeping bags and pillows.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will there be showers/hygiene options?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              There are no showers available at the venue. However, there will
              be a few bathrooms available for use. We recommend that you bring
              a change of clothes or two and any other hygiene products you need
              to freshen up through the weekend.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  Will there be travel reimbursements?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              We are unfortunately not able to provide travel reimbursements.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  What if I don't have a team?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              You can form a team using the #form-team channel in our{" "}
              <a href="https://discord.gg/ehacks">Discord</a> server. We can
              also help put you on a team the day of the event.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  How big can my team be?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="lg">
              We do not put a restriction on team size, but we give out prizes
              in sets of four. If you want, you can also work by yourself.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
