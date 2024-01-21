import { View } from "react-native";
import { Preview } from "@storybook/react";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => (
      <View
        style={{
          flex: 1,
          backgroundColor: "#26c6da",
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};
