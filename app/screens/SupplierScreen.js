import React from "react";
import { ScrollView } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import Supplier from "../components/search/SupplierItemComponent";

export default function SupplierScreen(props) {
  return (
    <ScrollView style={MainStyle.Container}>
      <Supplier nav={props.navigation} ></Supplier>
      <Supplier nav={props.navigation}></Supplier>
      <Supplier nav={props.navigation}></Supplier>
      <Supplier nav={props.navigation}></Supplier>
      <Supplier nav={props.navigation}></Supplier>
    </ScrollView>
  );
}
