import React from 'react';
import { Button, Container, Hero, Navbar, Text, size } from '@dathaplus/storybook';

const textOptionsQuery = {
  mediaQueryBreakPoints: {
    [size.tabletL]: {
      fontWeight: 400,
      color: 'white',
    },
  },
};

const IndexPage = () => {
  return (
    <Hero
      backgroundImage="linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(img/bg1.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      body={{
        info: (
          <Container
            styles={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '2em',
              alignItems: 'center',
            }}
          >
            <Text
              textTransform="uppercase"
              color="#a8987e"
              variant="h3"
              textDecoration="underline"
              fontFamily="Inter"
              fontWeight={600}
              entranceAnimate="slideInDown"
            >
              Luxury flights
            </Text>
            <Container>
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontSize="28px"
                lineHeight="unset"
                fontWeight={200}
                letterSpacing="0.6em"
                color="white"
                entranceAnimate="fadeInUp"
                mediaQueryBreakPoints={{
                  300: {
                    fontSize: '38px',
                  },
                  630: {
                    fontSize: '64px',
                  },
                }}
              >
                private
              </Text>
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontSize="28px"
                lineHeight="unset"
                fontWeight={200}
                letterSpacing="0.6em"
                color="white"
                entranceAnimate="fadeInUp"
                mediaQueryBreakPoints={{
                  300: {
                    fontSize: '38px',
                  },
                  630: {
                    fontSize: '64px',
                  },
                }}
              >
                jet charter
              </Text>
            </Container>

            <Button
              entranceAnimate="fadeInDown"
              styles={{
                borderRadius: '0',
                backgroundColor: '#a8987e',
                border: 'unset',
                color: 'black',
              }}
            >
              <Text textTransform="uppercase">Book a flight</Text>
            </Button>
          </Container>
        ),
      }}
      header={
        <Navbar
          logo={{
            src: './img/logo1.png',
            type: 'image',
          }}
          options={[
            {
              type: 'text',
              children: 'about us',
              fontFamily: 'Inter',
              variant: 'body4',
              textTransform: 'uppercase',
              fontWeight: 500,
              ...textOptionsQuery,
              options: [
                {
                  type: 'text',
                  children: 'aircraft management',
                  fontFamily: 'Inter',
                  variant: 'caption2',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                },
                {
                  type: 'text',
                  children: 'investment opportunities',
                  fontFamily: 'Inter',
                  variant: 'caption2',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                },
              ],
            },
            {
              type: 'text',
              children: 'Maintenance',
              fontFamily: 'Inter',
              variant: 'body4',
              textTransform: 'uppercase',
              fontWeight: 500,
              ...textOptionsQuery,
            },
            {
              type: 'text',
              children: 'contact us',
              fontFamily: 'Inter',
              variant: 'body4',
              textTransform: 'uppercase',
              fontWeight: 500,
              ...textOptionsQuery,
            },
            {
              type: 'button',
              children: (
                <Text
                  variant="body4"
                  fontFamily="Inter"
                  textTransform="uppercase"
                  fontWeight={400}
                  mediaQueryBreakPoints={{
                    [size.tabletL]: {
                      color: 'white !important',
                    },
                  }}
                >
                  Clients login
                </Text>
              ),
              styles: {
                width: '100%',
                borderRadius: 0,
                styleTheme: 'secondary',
                backgroundColor: 'transparent',
              },
            },
            {
              type: 'button',
              children: (
                <Text variant="body4" fontFamily="Inter" textTransform="uppercase" fontWeight={600}>
                  Request a quote
                </Text>
              ),
              styles: {
                width: '100%',
                borderRadius: 0,
              },
            },
          ]}
        />
      }
      size="full_height"
    />
  );
};

export default IndexPage;
