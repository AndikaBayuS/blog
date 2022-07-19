import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import React from "react";
import Card from "~/components/Card";
import Header from "~/components/Header";
import Layout from "~/layouts";

import * as firstPost from "./blog/first-post.mdx";

interface posts {
  title: string;
  description: string;
  slug: string;
}

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const loader: LoaderFunction = () => {
  return json([postFromModule(firstPost)]);
};

export default function Index() {
  const navigate = useNavigate();
  const posts = useLoaderData();

  return (
    <Layout>
      <Header />
      <div className="my-6">
        <p className="text-3xl font-semibold text-light-title">Latest Post</p>
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post: posts) => (
            <Card
              key={post.slug}
              title={post.title}
              description={post.description}
              onClick={() => navigate(`/blog/${post.slug}`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
