import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-addon-module-mock",
    "@storybook/addon-interaction",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: { experimentalRSC: true },
  staticDirs: ["../public"],
};
export default config;
