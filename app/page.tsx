import type { Metadata } from 'next';
import RootRedirect from './components/RootRedirect';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://masari.salahslab.com/en',
  },
};

export default function Home() {
  return <RootRedirect />;
}
