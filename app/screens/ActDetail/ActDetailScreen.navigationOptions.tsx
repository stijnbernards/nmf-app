import React from "react";

import { t } from "utils";

import { Text } from "../../components";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = () => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerTintColor: Colors.grey100,
  headerBackTitleVisible: false,
  headerTitle: () => <Text.H1>{t("ACT_DETAIL_SCREEN_TITLE")}</Text.H1>,
});

export default navigationOptions;
