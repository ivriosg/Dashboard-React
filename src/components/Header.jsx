import { Cog, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="layout-header">
      <div className="layout-header-intro">
        <h1>Welcome to Product Catalogue and Monetization Platform</h1>
        <p>Quickly offers, products, and Contracts.</p>
      </div>
      <div className="layout-header-actions">
        <Cog color='black' size={24} />
        <Bell color='black' size={24} />
      </div>
    </header>
  );
}
