import { styled } from "styled-components";

export const SelectStyle = styled.div`
.select{
    width: 400px;
    padding: 10px;
    background-color:blueviolet;
    outline: none;
    color: white;
    font-weight: 900;
    font-size: 20px;
     /*for firefox*/
  -moz-appearance: none;
  /*for chrome*/
  -webkit-appearance:none;
  appearance: none;
  margin: 0 auto;
  ::-ms-expand {
    display: none;
}
    .option{
        
        display: inline-block;
        background-color: blueviolet;
    }
}
`