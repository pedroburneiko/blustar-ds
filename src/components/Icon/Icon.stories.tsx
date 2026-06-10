import type { Meta, StoryObj } from "@storybook/react";
import { ArrowForward, CheckCircle, Chevron, Copy } from "./Icon";

const meta: Meta = { title: "Fundamentos/Ícones" };
export default meta;
type Story = StoryObj;

const items = [
  { name: "ArrowForward", El: ArrowForward },
  { name: "CheckCircle", El: CheckCircle },
  { name: "Chevron", El: Chevron },
  { name: "Copy", El: Copy },
];

export const Todos: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", fontFamily: "Versos" }}>
      {items.map(({ name, El }) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "#fff" }}>
          <El size={24} color="#FFFFFF" />
          <span style={{ fontSize: 12 }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
