import React from "react";
import { ScrollView } from "react-native";
import MainStyle from "../stylesheets/MainStyle";
import Supplier from "../components/search/SupplierItemComponent";

export default function SupplierScreen(props) {
  const routeParams = props.route.params;
  console.log(routeParams)
  return (
    <ScrollView style={MainStyle.Container}>
        {routeParams.randomSuplier > 0 ? <Supplier nav={props.navigation} params={routeParams}></Supplier> : null}
        {routeParams.randomSuplier > 1 ? <Supplier nav={props.navigation} params={routeParams}></Supplier> : null}
        {routeParams.randomSuplier > 2 ? <Supplier nav={props.navigation} params={routeParams}></Supplier> : null}
        {routeParams.randomSuplier > 3 ? <Supplier nav={props.navigation} params={routeParams}></Supplier> : null}
        {routeParams.randomSuplier > 4 ? <Supplier nav={props.navigation} params={routeParams}></Supplier> : null}
    </ScrollView>
  );
}
