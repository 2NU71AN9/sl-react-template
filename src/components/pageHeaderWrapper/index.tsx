import { Card } from "antd";

export default function PageHeaderWrapper(props: Record<string, string>) {
  const { title, subtitle } = props;

  return (
    <Card className="rounded-none!" variant="borderless">
      <span className="text-2xl font-bold">{title}</span>
      <span>{subtitle}</span>
    </Card>
  );
}
