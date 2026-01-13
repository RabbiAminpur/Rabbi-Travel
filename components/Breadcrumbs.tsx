
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap py-2 bg-white/50 rounded-lg px-4 backdrop-blur-sm">
      <Link to="/" className="hover:text-emerald-600 transition-colors">হোম</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="mx-2 text-slate-300">/</span>
          {index === items.length - 1 ? (
            <span className="font-medium text-emerald-700">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-emerald-600 transition-colors">
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
