import React from "react";
import styled from 'styled-components'

const Button = styled.div`
  /* Set border color on primary or secondary prop */

  border: 1px solid ${props => props.primary ? "var(--accent)" : "var(--black-90)"};

  display: block;
  padding: 16px 24px 16px 24px;
  cursor: pointer;
  text-align: middle;
  vertical-align: center;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--black-90);

  &:hover {
    background-color: var(--black-20)
  }
`

export default Button;