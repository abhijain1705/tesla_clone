import React from 'react'
import Section from "./Section";
import Header from "./Header";
import styled from "styled-components";

function Home() {
  return (
    <Container>
    <Header />
        <Section 
      title="Model 3"
      backgroundImg='url("/images/model-3.jpg")'
      leftbtntext="CUSTOM ORDER"
      rightbtntext="EXISTING INVENTORY"
      arrow="/images/down-arrow.svg"
    />
    <Section 
      title="Model Y"
      backgroundImg='url("/images/model-y.jpg")'
      leftbtntext="CUSTOM ORDER"
      rightbtntext="EXISTING INVENTORY"
    />
    <Section 
      title="Model S"
      backgroundImg='url("/images/model-s.jpg")'
      leftbtntext="CUSTOM ORDER"
      rightbtntext="EXISTING INVENTORY"
    />
    <Section 
      title="Model X"
      backgroundImg='url("/images/model-x.jpg")'
      leftbtntext="CUSTOM ORDER"
      rightbtntext="EXISTING INVENTORY"
    />
    <Section 
      title="Solar Panels"
      backgroundImg='url("/images/solar-panel.jpg")'
      leftbtntext="ORDER NOW"
      rightbtntext="LEARN MORE"
    />
    <Section 
      title="Solar Roofs"
      backgroundImg='url("/images/solar-roof.jpg")'
      leftbtntext="ORDER NOW"
      rightbtntext="LEARN MORE"
    />
    <Section 
      title="Accessories"
      backgroundImg='url("/images/accessories.jpg")'
      leftbtntext="SHOP NOW"
      license="Tesla @ 2022"
      legal="Privacy & Legal"
      career="Careers"
      news="News"
    />
    </Container>
  )
}

export default Home;

const Container = styled.div`
 overflow-x: hidden;
`