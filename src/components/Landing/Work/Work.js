import React from "react";
import { Container } from "../../../globalStyles";

import workImg from "../../../images/runcoin-work-imgtest.svg";

import {
  WorkSection,
  WorkRow,
  WorkColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  WorkImg,
} from "./Work.elements";

function Work() {
  return (
    <>
      <Container>
        <WorkSection id="work">
          <WorkRow>
            <WorkColumn>
              <TextWrapper>
                <Heading>
                  How it
                  <span className="text-blue"> Works!</span>
                </Heading>
                <TopLine>
                  It's a competition that the participant can play for a Global  POOL, 
                  this POOL value accumulates of the previous participants. The system doesn't use random numbers generation,
                  simply the win probability will depend on time and the Cryptocurrency value.
                </TopLine>
              </TextWrapper>
            </WorkColumn>
            <WorkColumn>
              <ImgWrapper>
                <WorkImg src={workImg}></WorkImg>
              </ImgWrapper>
            </WorkColumn>
          </WorkRow>
        </WorkSection>
      </Container>
    </>
  );
}

export default Work;
