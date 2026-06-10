import type { Meta, StoryObj } from "@storybook/react";
import { palette } from "./colors";

const meta: Meta = { title: "Fundamentos/Cores" };
export default meta;
type Story = StoryObj;

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ width: 120 }}>
      <div
        style={{
          height: 72,
          borderRadius: 12,
          background: value,
          border: "1px solid #E5E5E5",
        }}
      />
      <div style={{ fontSize: 13, marginTop: 6, fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: 12, color: "#707070" }}>{value}</div>
    </div>
  );
}

function Group({ title, group }: { title: string; group: Record<string, string> }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontFamily: "Versos", marginBottom: 12 }}>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {Object.entries(group).map(([k, v]) => (
          <Swatch key={k} name={k} value={v} />
        ))}
      </div>
    </section>
  );
}

export const Paleta: Story = {
  render: () => (
    <div style={{ fontFamily: "Versos" }}>
      <Group title="Cyan (marca)" group={palette.cyan} />
      <Group title="Blue" group={palette.blue} />
      <Group title="Navy" group={palette.navy} />
      <Group title="Azul-acinzentado" group={palette.blueGray} />
      <Group title="Verde (sucesso)" group={palette.green} />
      <Group title="Neutros" group={palette.neutral} />
    </div>
  ),
};
