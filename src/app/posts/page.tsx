import React from 'react';
import type { Metadata } from 'next';
import { endpoints } from '../libs/endpoints';
import { headers } from '../libs/headers';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts page description',
};

interface Posts {
  properties: any;
  name: string;
  description: string;
}

async function getData() {
  const res = await fetch(endpoints.postsEndpoint, {
    method: 'POST',
    headers,
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const page: React.FC<any> = async () => {
  const data = await getData();

  const allPosts = data.results.map((result: Posts) => ({
    name: result.properties.Name.title[0]?.plain_text,
    description: result.properties.description.rich_text[0]?.plain_text,
  }));

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {allPosts.map((post: Posts, index: number) => {
          return (
            <li key={index}>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
