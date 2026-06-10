import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta = {
  title: "Componentes/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { variant: "success", children: "Tudo certo, sucesso!" },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sucesso: Story = {};
