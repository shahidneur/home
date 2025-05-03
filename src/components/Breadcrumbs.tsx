import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            to="/" 
            className="text-primary-600 hover:text-primary-800 transition-colors flex items-center"
          >
            <Home size={16} className="mr-1" />
            Home
          </Link>
        </li>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <React.Fragment key={name}>
              <ChevronRight size={16} className="text-slate-400" />
              <li>
                {isLast ? (
                  <span className="text-slate-600 font-medium">
                    {name.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    {name.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;