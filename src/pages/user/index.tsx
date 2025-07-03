import PageHeaderWrapper from "@/components/pageHeaderWrapper";
import { Card } from "antd";
export default function User() {
  return (
    <>
      <PageHeaderWrapper title="用户管理" subtitle="(副标题)" />
      <section>
        <Card>Users页面</Card>
      </section>
    </>
  );
}
