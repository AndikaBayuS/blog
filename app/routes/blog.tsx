import { Outlet } from "@remix-run/react";
import Layout from "~/layouts";

export default function Blog() {
  return (
    <Layout>
      <div className="mt-12">
        <article className="prose prose-h1:text-light-title prose-p:text-light-paragraph">
          <Outlet />
        </article>
      </div>
    </Layout>
  );
}
