import React from 'react';
import styled from "styled-components";

function Section({ backgroundImg, title, leftbtntext, rightbtntext, license, legal, career, news, arrow }) {
  return (
    <Wrap bgImg={backgroundImg}>
      <TextArea>
        <h1 className='text-4xl font-medium sm:text-5xl'>{title}</h1>
        <p>Order Online for <span className='underline'>Touchless Delivery</span></p>
      </TextArea>
      <Btns className=''>
        <ButtonBox>
          <Full className='sm:w-[100%] sm:h-[100px] sm:justify-between'>
            <LeftButton className='sm:mx-auto' >
              {leftbtntext}
            </LeftButton>
            {rightbtntext &&
              <RightButton className='sm:mx-auto' >
                {rightbtntext}
              </RightButton>
            }
            {license &&
              <About className='sm:mt-4 sm:flex sm:w-[100%] sm:justify-evenly' >
                <p>{license}</p>
                <p>{legal}</p>
                <p>{career}</p>
                <p>{news}</p>
              </About>
            }
          </Full>
        </ButtonBox>
        <Hiphop className='animate-bounce' src={arrow}></Hiphop>
      </Btns>
    </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  overflow-x: hidden;
  background-size: cover;
  background-image: ${props => props.bgImg}
`

const TextArea = styled.div`
  padding: 15vh 0;
  text-align: center;
`

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    align-items: center;
    flex-direction: row;
    width: 80%;
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    width: 50%;
    justify-content: space-evenly;
  }
`

const Btns = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const LeftButton = styled.div`
 height: 40px;
 width: 300px;
 cursor: pointer;
 font-weight: 700;
 text-align: center;
 color: white;
 padding-top: 8px;
 border-radius: 20px;
 background-color: #171a20cc;
`

const RightButton = styled(LeftButton)`
 color: #171a20cc;
 margin-top: 16px;
 opacity: 0.8;
 background-color: white;

 @media (min-width: 640px) {
   margin-top: 0;
 }
`

const About = styled.div`
 color: #171a20cc;
 text-align: center;
 position: relative;
`

const Full = styled.div`
  display: flex;
  flex-direction: column;
`

const Hiphop = styled.img`
 height: 40px;
 margin-top: 20px;
`