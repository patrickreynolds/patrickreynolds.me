import React from "react";
import styled from 'styled-components'

const Button = styled.div`
  /* Set border color on primary or secondary prop */

  border: 1px solid ${props => props.primary ? "var(--accent)" : "var(--black-90)"};

  display: block;
  margin-left: auto;
  padding: 16px 24px 16px 24px;
  cursor: pointer;
  text-align: middle;
  vertical-align: center;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--black-90);

  margin-bottom: ${props => props.large ? "0" : "120px"}

  &:hover {
    background-color: var(--accent-hover);
  }

  @media only screen and (max-device-width: 45em) { /* 960px */
    margin: auto;
    margin-bottom: ${props => props.large ? "0" : "80px"}
  }
`

export default Button;