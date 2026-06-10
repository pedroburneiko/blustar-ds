import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "black",
      values: [
        { name: "black", value: "#000000" },
        { name: "dark", value: "#04001E" },
        { name: "subtle", value: "#F7F7F7" },
        { name: "light", value: "#FFFFFF" },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
