use client
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarBase
        logoSrc='/images/logo.svg'
        logoAlt='MemeMint Logo'
        logoWidth={100}
        logoHeight={50}
        leftButtonText='Join the Meme'
        onLeftButtonClick={() => {}}
      />

      <BillboardHero
        title='Welcome to MemeMint'
        subtitle='Join the fun of meme trading like never before!'
      />

      <SplitAbout
        description='MemeMint is a fun, engaging meme coin designed to bring joy and value to our community. Join us on this exciting journey!'
      />

      <HowToBuy3D
        title='How to Buy MemeMint'
        steps={[
          { title: 'Step 1', description: 'Get a crypto wallet', image: '/images/placeholder1.avif', position: 'left', isCenter: true },
          { title: 'Step 2', description: 'Buy MemeMint on exchanges', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
          { title: 'Step 3', description: 'Join our community!', image: '/images/placeholder3.avif', position: 'right', isCenter: true },
        ]}
      />

      <NumberGridTokenomics
        title='Tokenomics'
        description='Our tokenomics are designed to promote growth and community engagement.'
        kpiItems={[
          { value: '1M', description: 'Total Supply' },
          { value: '500K', description: 'Circulating Supply' },
          { value: '10%', description: 'Tax Rate' },
        ]}
      />

      <CentralFAQ
        items={[
          { title: 'What is MemeMint?', content: 'MemeMint is a fun and interactive meme coin built for the community.' },
          { title: 'How do I buy MemeMint?', content: 'You can buy MemeMint on various cryptocurrency exchanges.' },
          { title: 'Is there a mobile app?', content: 'Currently, there is no mobile app.' },
        ]}
      />

      <FooterBase
        logoSrc='/images/logo.svg'
        logoWidth={100}
        logoHeight={50}
        copyrightText='© 2023 MemeMint'
        columns={[
          { title: 'Links', items: [
            { label: 'Home', onClick: () => {} },
            { label: 'About', onClick: () => {} },
            { label: 'Tokenomics', onClick: () => {} },
          ]},
          { title: 'Support', items: [
            { label: 'Help Center', onClick: () => {} },
            { label: 'Contact Us', onClick: () => {} },
          ]},
          { title: 'Social', items: [
            { label: 'Twitter', onClick: () => {} },
            { label: 'Telegram', onClick: () => {} },
          ]},
        ]}
      />
    </SiteThemeProvider>
  );
}