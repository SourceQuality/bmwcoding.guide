import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Feature({title, description, link}) {
  return (
    <div style={{flex: '1', minWidth: '250px', padding: '1rem'}}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>Read more →</Link>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Community BMW coding guides for G series">
      <header style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: '#fff',
      }}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>BMW Coding Wiki</h1>
        <p style={{fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 1.5rem'}}>
          Community-maintained coding guides for modern BMW G series vehicles.
          Learn how to unlock hidden features, customize your car, and get the most out of your BMW.
        </p>
        <Link
          to="/docs/intro"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: '#0b5fff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}>
          Get Started
        </Link>
      </header>

      <main style={{maxWidth: '960px', margin: '0 auto', padding: '2rem'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem'}}>
          <Feature
            title="G Series Guides"
            description="Detailed coding guides for G20, G30, G05, G80, G70 and more — organized by chassis."
            link="/docs/g-series/overview"
          />
          <Feature
            title="Coding Tools"
            description="Setup guides for BimmerCode, E-Sys, and xHP Flasher — from beginner to advanced."
            link="/docs/tools/bimmercode"
          />
          <Feature
            title="Popular Mods"
            description="Step-by-step walkthroughs for digital speedometer, ambient lighting, driving modes, and more."
            link="/docs/mods/digital-speedometer"
          />
        </div>

        <div style={{textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #eee'}}>
          <h2>Contribute</h2>
          <p>
            This wiki is open source and community-driven.{' '}
            <a href="https://github.com/SourceQuality/bmwcoding.guide">Open a PR on GitHub</a> to
            add guides, correct information, or improve existing pages.
          </p>
        </div>
      </main>
    </Layout>
  );
}
