import React from 'react';
import styled from '@emotion/styled'

const StComponentLayout = styled.div({
  backgroundColor: "#f5f2f0",
  width: "100%",
  height: "5rem",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center"
});

export const ComponentLayout = ({children}) => {
  return <StComponentLayout>{children}</StComponentLayout>
}