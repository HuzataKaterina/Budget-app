import React from "react";
import styled from "styled-components";
import CircularSlider from "@fseehawer/react-circular-slider";

const Container = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  padding: 1%;
  box-shadow: 0 0 10px #8583832b;
  background-color: #fff;
  border-radius: 20px;
`;
const Title = styled.span`
  padding: 0.5em;
  color: black;
  font-size: 1em;
`;
const Span = styled.span`
  color: gray;
  font-weight: bold;
`;
const SpanLeft = styled(Span)`
  color: #4e87eb;
  font-size: 0.75em;
`;
const CurrentGrapf = () => {
  return (
    <Container>
      <Title>Food&Drinks</Title>
      <CircularSlider
        width={150}
        progressColorFrom="#00bfbd"
        min={0}
        max={100}
        dataIndex={40}
        hideKnob={true}
        knobDraggable={false}
        labelFontSize={25}
        valueFontSize={0}
        label={`${40}%`}
      />
      <SpanLeft>
        $500 lefl<Span>{" out of $900"}</Span>
      </SpanLeft>
    </Container>
  );
};

export default CurrentGrapf;
