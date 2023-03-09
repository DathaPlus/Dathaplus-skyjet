import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Container, Hero, Image, InfoImage, Section, Text} from "@dathaplus/storybook"
import { BodyHero } from "../components/hero/body";
import { HeaderHero } from "../components/hero/header";
export { BodyHero } from "../components/hero/body";
export { HeaderHero } from "../components/hero/header";

import {containerDos, containerUno} from "../components/customer/style";


const IndexPage: React.FC<PageProps> = () => {

  return (
    <main>
      <Hero
          backgroundImage="linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(/img/Rectangle1.png)"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          body={{
            info: <BodyHero></BodyHero>
          }}
          header={<HeaderHero></HeaderHero>}
          size="full_height"

      />

      <Section
          title={{
            children: 'Our Services',
            fontWeight: 'bold',
            marginBottom: '26px',
            marginTop: '35px',
            styleTheme: 'secondary',
            textAlign: 'center',
            textDecoration: 'underline',
            textTransform: 'uppercase'
          }}
      >
        <Container { ...containerUno }>
          <Container{ ...containerDos }>
            <InfoImage
                image={{
                  src: '/img/Rectangle4.png',
                  scrollAnimate: 'fadeInUp',
            }}
                info={{
                  children: 'Concierge',
                  scrollAnimate: 'slideInLeft',
                  fontSize: 'clamp(1.5375rem, 0.5028rem + 1.556vw, 3.5rem)',
                  maxWidth: '270px',
                  textTransform: 'capitalize'
                }}
            />
            <InfoImage
                direction="reverse"
                image={{
                  src: '/img/Rectangle5.png',
                  scrollAnimate: 'fadeInUp',
                }}
                info={{
                  children: 'elite travel experience',
                  scrollAnimate: 'slideInRight',
                  fontSize: 'clamp(1.5375rem, 0.5028rem + 1.556vw, 3.5rem)',
                  maxWidth: '270px',
                  textTransform: 'capitalize'
                }}
            />
            <InfoImage
                image={{
                  src: '/img/Rectangle6.png',
                  scrollAnimate: 'fadeInUp',
                }}
                info={{
                  children: 'safety',
                  scrollAnimate: 'slideInLeft',
                  fontSize: 'clamp(1.5375rem, 0.5028rem + 1.556vw, 3.5rem)',
                  maxWidth: '270px',
                  textTransform: 'capitalize'
                }}
            />
          </Container>

        </Container>



      </Section>

      <Section
        styleTheme="primary.light"
        title={{
          children: 'Aircraft Management',
          fontWeight: 'bold',
          marginBottom: '.5em',
          styleTheme: 'secondary'
        }}
      >
        <Text
          fontFamily="Open Sans"
          padding="1em 0"
          styleTheme="gray.gray400"
          variant="body3"
        >
          We offer customized Part 135 (Charter) and Part 91 (Private) aircraft management solutions. SkyJet Elite can maintain the safe operation of your aircraft and generate revenue through our air charter programs by chartering your aircraft, which helps defray the cost of ownership and provide ROI.
        </Text>
      </Section>


      <Image src='/img/Rectangle7.png'/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
