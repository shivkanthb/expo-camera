import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import styled from "styled-components";

export default function DetailsScreen({ route, navigation }) {
  const { uri } = route.params;
  console.log("uri", uri);
  return (
    <DetailsContainer>
      <Image
        source={{ uri: uri }}
        style={{ height: "100%", width: "100%", resizeMode: "cover" }}
      />
    </DetailsContainer>
  );
}

const DetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
