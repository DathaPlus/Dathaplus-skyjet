import React from "react";
import {Button, Container, Text} from "@dathaplus/storybook";

export const BodyHero = () => {
    return <Container styles={{alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '2em', height: '100%', justifyContent: 'center', width: '100%'}}><Text color="#a8987e" entranceAnimate="slideInDown" fontFamily="Inter" fontWeight={600} textDecoration="underline" textTransform="uppercase" variant="h3">Luxury flights</Text><Container><Text color="white" entranceAnimate="fadeInUp" fontSize="28px" fontWeight={200} letterSpacing="0.6em" lineHeight="unset" mediaQueryBreakPoints={[{fontSize: '38px'}, {fontSize: '64px'}]} textAlign="center" textTransform="uppercase">private</Text><Text color="white" entranceAnimate="fadeInUp" fontSize="28px" fontWeight={200} letterSpacing="0.6em" lineHeight="unset" mediaQueryBreakPoints={[{fontSize: '38px'}, {fontSize: '64px'}]} textAlign="center" textTransform="uppercase">jet charter</Text></Container><Button entranceAnimate="fadeInDown" styles={{backgroundColor: '#a8987e', border: 'unset', borderRadius: '0', color: 'black'}}><Text textTransform="uppercase">Book a flight</Text></Button></Container>
}

