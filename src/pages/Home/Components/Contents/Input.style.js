import styled from 'styled-components';

export const Input = styled.div`
  .toggletheme {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    height: 100px;
    width: 175px;
    background-color: wheat;
    border-radius: 5rem;
    transition: background-color 0.2s;
    box-shadow: 0 0 15px #00001e;

    &:checked {
      background-color: #00001e;

      &::after {
        background-color: rgb(168, 168, 206);
        left: 70% !important;
      }
    }
  }

  .toggletheme::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: rgb(47, 47, 68);
    transition: left 0.2s;
  }
`;
