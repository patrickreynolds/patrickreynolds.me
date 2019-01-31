import React, { Component } from "react";
import styled from 'styled-components'

const FactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: ${props => props.first ? "0" : "24px"};
  flex: 1;
`

export default FactsColumn;
