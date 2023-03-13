import React, { FC } from 'react';
import {TSectionAircraftManagementBody} from "@interfaces/sectionaircraftmanagement";
import {Container, ContainerWrapper, Text} from "@dathaplus/storybook";

export const BodyAircraftManagement : FC<TSectionAircraftManagementBody>=({title, info}) => {
  return (
    <><ContainerWrapper>
      <Container styles={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 24px 0 24px',
        margin: 'auto',
        maxWidth: '635px',
        mediaQueryBreakPoints: {
          770: {
            justifyContent: 'space-between',
          },
          1250: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '60px 0 10px 0',
            maxWidth: 'unset'
          },



        }
      }}>
        <div style={{
        }}>
          <Text
            fontFamily= 'Inter'
            fontWeight= '300px'
            fontSize= '32px'
            lineHeight= '39px'
            color= {'#2A2A2D'}
            paddingBottom= '20px'
            mediaQueryBreakPoints={{
              770 : {
                fontSize: '48px',
                maxWidth: '445px',
                lineHeight: '58px',
              }
            }}
          >{title}</Text>
        </div>

        <div style={{
          maxWidth: '635px',
        }}>
          <>
            <Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
            >{info}</Text>
            <br/>
            {/*<Text
              fontFamily= 'Inter'
              fontWeight= '400px'
              fontSize= '16px'
              lineHeight= '24px'
              color={'#2A2A2D'}
              display= 'block'
              width= '100%'
              tag= 'p'
              mediaQueryBreakPoints={{
                770 : {
                  fontSize: '16px',

                }
              }}
            >Whether you have meetings in three cities on the same day, or you want to surprise your family with a last-minute vacation, SkyJet Elite will deliver you an unmatched charter experience. In as little as 3 hours’ notice, SkyJet Elite will have your ideal aircraft staffed and ready to fly. We anticipate your needs and pay careful attention to every detail of your flight. Our mission is to provide you with the safest, most thoughtful and professional service in private travel.
            </Text>*/}
          </>

        </div>



      </Container>
    </ContainerWrapper></>
  )
}



