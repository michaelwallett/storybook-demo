import type { Meta, StoryObj } from "@storybook/react";
import { createMock } from "storybook-addon-module-mock";
import { expect, within } from "@storybook/test";
import * as serverSide from "./serverSide";
import Home from "./page";

const meta = {
  title: "Home",
  component: Home,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    moduleMock: {
      mock: () => {
        const mock = createMock(serverSide, "getMessage");
        mock.mockResolvedValue({ hello: "Hello from server side mock!" }); // Ensure proper async handling
        return [mock];
      },
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.findByText("Hello from server side mock!")
    ).resolves.toBeVisible();
  },
};
