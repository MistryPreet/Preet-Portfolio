import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';

const Layout = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <ParticleBackground />
      <Navigation />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;