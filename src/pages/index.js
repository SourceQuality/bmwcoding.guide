import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home" description="BMW Coding Wiki">
      <main>
        <div style={{padding: '2rem'}}>
          <h1>BMW Coding Wiki</h1>
          <p>Community-maintained BMW coding guides and references.</p>
          <p>
            Get started by editing the docs in the repository or open a pull request.
          </p>
        </div>
      </main>
    </Layout>
  );
}
