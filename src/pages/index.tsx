import React from "react";
import { Button, Container, Hero, Navbar, Text } from "@dathaplus/storybook";

const IndexPage = () => {
  return (
    <div>
      <Hero
        backgroundImage="linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(img/bg1.png)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        body={{
          info: (
            <Container
              styles={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "2em",
                height: "100%",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                color="#a8987e"
                entranceAnimate="slideInDown"
                fontFamily="Inter"
                fontWeight={600}
                textDecoration="underline"
                textTransform="uppercase"
                variant="h3"
              >
                Luxury flights
              </Text>
              <Container>
                <Text
                  color="white"
                  entranceAnimate="fadeInUp"
                  fontSize="28px"
                  fontWeight={200}
                  letterSpacing="0.6em"
                  lineHeight="unset"
                  mediaQueryBreakPoints={[
                    { fontSize: "38px" },
                    { fontSize: "64px" },
                  ]}
                  textAlign="center"
                  textTransform="uppercase"
                >
                  private
                </Text>
                <Text
                  color="white"
                  entranceAnimate="fadeInUp"
                  fontSize="28px"
                  fontWeight={200}
                  letterSpacing="0.6em"
                  lineHeight="unset"
                  mediaQueryBreakPoints={[
                    { fontSize: "38px" },
                    { fontSize: "64px" },
                  ]}
                  textAlign="center"
                  textTransform="uppercase"
                >
                  jet charter
                </Text>
              </Container>
              <Button
                entranceAnimate="fadeInDown"
                styles={{
                  backgroundColor: "#a8987e",
                  border: "unset",
                  borderRadius: "0",
                  color: "black",
                }}
              >
                <Text textTransform="uppercase">Book a flight</Text>
              </Button>
            </Container>
          ),
        }}
        header={
          <Navbar
            logo={{ src: "./img/logo1.png", type: "image" }}
            options={[
              {
                children: "about us",
                fontFamily: "Inter",
                fontWeight: 500,
                mediaQueryBreakPoints: [{ color: "white", fontWeight: 400 }],
                options: [
                  {
                    children: "aircraft management",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    type: "text",
                    variant: "caption2",
                  },
                  {
                    children: "investment opportunities",
                    fontFamily: "Inter",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    type: "text",
                    variant: "caption2",
                  },
                ],
                textTransform: "uppercase",
                type: "text",
                variant: "body4",
              },
              {
                children: "Maintenance",
                fontFamily: "Inter",
                fontWeight: 500,
                mediaQueryBreakPoints: [{ color: "white", fontWeight: 400 }],
                textTransform: "uppercase",
                type: "text",
                variant: "body4",
              },
              {
                children: "contact us",
                fontFamily: "Inter",
                fontWeight: 500,
                mediaQueryBreakPoints: [{ color: "white", fontWeight: 400 }],
                textTransform: "uppercase",
                type: "text",
                variant: "body4",
              },
              {
                children: (
                  <Text
                    fontFamily="Inter"
                    fontWeight={400}
                    mediaQueryBreakPoints={[{ color: "white !important" }]}
                    textTransform="uppercase"
                    variant="body4"
                  >
                    Clients login
                  </Text>
                ),
                styles: {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  styleTheme: "secondary",
                  width: "100%",
                },
                type: "button",
              },
              {
                children: (
                  <Text
                    fontFamily="Inter"
                    fontWeight={600}
                    textTransform="uppercase"
                    variant="body4"
                  >
                    Request a quote
                  </Text>
                ),
                styles: { borderRadius: 0, width: "100%" },
                type: "button",
              },
            ]}
          />
        }
        size="full_height"
      />
    </div>
  );
};

export default IndexPage;
