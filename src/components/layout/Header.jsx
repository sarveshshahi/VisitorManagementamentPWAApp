import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component
 * 
 * A consistent header component to be used across all pages in the application.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display in the header
 * @param {boolean} props.showBackButton - Whether to show the back button (default: true)
 * @param {Function} props.onBackClick - Custom back button click handler (default: navigate back)
 * @param {React.ReactNode} props.rightContent - Optional content to display on the right side
 */
const Header = ({ 
  title, 
  showBackButton = true, 
  onBackClick, 
  rightContent = null 
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <header className="flex items-center justify-between p-3 bg-white border-b sticky top-0 z-10">
      {showBackButton ? (
        <button 
          className="text-[#111418] flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100"
          onClick={handleBackClick}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      ) : (
        <div className="flex size-10 shrink-0 items-center text-[#111418]">
          <Shield className="w-5 h-5" />
        </div>
      )}
      
      <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
        {title}
      </h2>
      
      {rightContent ? (
        <div className="flex items-center justify-end size-10 shrink-0">
          {rightContent}
        </div>
      ) : (
        <div className="size-10 shrink-0" />
      )}
    </header>
  );
};

export default Header;