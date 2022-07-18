import { Link, useNavigate } from "@remix-run/react";

import Header from "~/components/Header";
import Layout from "~/layouts";
interface posts {
  id: string;
  title: string;
  post: string;
}
export default function Index() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <div>
        <p className="text-3xl font-semibold text-night-white">Latest Post</p>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Link to="/blog/first-post" className="text-night-pink">Just Click Here, will update the content later!</Link>
        </div>
      </div>
    </Layout>
  );
}
