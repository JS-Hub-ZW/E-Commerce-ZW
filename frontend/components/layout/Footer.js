import {
  Button,
  Box,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
{
  /*import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
   */
}
export default function Footer() {
  return (
    <Box color="white" px={8} as="footer" role="contentinfo" bg="#1D1D1D">
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        py={{
          base: "12",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "6",
            md: "8",
          }}
          align="start"
        >
          <Text color="muted">E-Commerce.Zw</Text>
        </Stack>
        <Stack
          direction={{
            base: "column-reverse",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="8">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Home
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">hO</Button>
                <Button variant="link">Pricing</Button>
                <Button variant="link">Use Cases</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Bags
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Hot Deals</Button>
                <Button variant="link">Laptops</Button>
                <Button variant="link">Accesories</Button>
                <Button variant="link">Privacy Policy</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                TVS
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link">Privacy</Button>
                <Button variant="link">Terms</Button>
                <Button variant="link">License</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Categories
            </Text>
            <Stack
              spacing="4"
              direction={{
                base: "column",
                sm: "row",
              }}
              maxW={{
                lg: "360px",
              }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button variant="primary" type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} JSHUB, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          {/*<IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />
        />*/}
          {/*<IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />*/}
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
