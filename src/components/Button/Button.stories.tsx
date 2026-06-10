import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, fn, within } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Componentes/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {
    children: "Botão",
    variant: "primary",
    size: "md",
    onClick: fn(),
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "primary" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const ComIcone: Story = {
  args: { variant: "primary", leftIcon: <span>+</span>, children: "Button" },
};
export const Loading: Story = { args: { loading: true, children: "Carregando" } };
export const Disabled: Story = { args: { disabled: true } };

export const Tamanhos: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

// Teste de interação: o clique dispara o handler; desabilitado não dispara.
export const TesteDeClique: Story = {
  args: { children: "Clique aqui" },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: /clique aqui/i });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
