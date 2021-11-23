import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = () => keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const move = (props) => keyframes`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(${props.translateTo}${props.sizeUnit}) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`;

const getSquare = ({ countSquare, color, size, sizeUnit }) => {
  const square = [];
  const center = size / 3;
  const squareTranslatePositions = [-center, center];
  for (let i = 0; i < countSquare; i++) {
    square.push(
      <Square
        color={color}
        size={size}
        x={size / 2 - size / 6}
        y={size / 2 - size / 6}
        key={i.toString()}
        translateTo={squareTranslatePositions[i]}
        index={i}
        sizeUnit={sizeUnit}
      />
    );
  }
  return square;
};

const Spinner = ({ color = "#FFE299" }) => {
  const size = 40;
  const sizeUnit = "px";
  const countSquare = 2;

  return (
    <div className="flex flex-1 items-center justify-center">
      <Wrapper size={size} sizeUnit={sizeUnit}>
        <SquareWrapper size={size} sizeUnit={sizeUnit}>
          {getSquare({ countSquare, color, size, sizeUnit })}
        </SquareWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="6"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </Wrapper>
    </div>
  );
};

export default Spinner;

const Wrapper = styled.div`
  width: ${(props) => `${props.size}${props.sizeUnit}`};
  height: ${(props) => `${props.size}${props.sizeUnit}`};
  filter: url("#goo");
`;

const SquareWrapper = styled.div`
  position: relative;
  width: ${(props) => `${props.size}${props.sizeUnit}`};
  height: ${(props) => `${props.size}${props.sizeUnit}`};
  animation: ${rotate} 0.85s linear infinite;
`;

const Square = styled.div`
  position: absolute;
  top: ${(props) => `${props.y}${props.sizeUnit}`};
  left: ${(props) => `${props.x}${props.sizeUnit}`};
  width: ${(props) => `${props.size / 3}${props.sizeUnit}`};
  height: ${(props) => `${props.size / 3}${props.sizeUnit}`};
  background-color: ${(props) => props.color};
  animation: ${move} 0.75s ease-in-out infinite;
`;
