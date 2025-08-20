import React from 'react';
import { Button } from '@/components/ui/button';

/**
 * Footer Component
 * 
 * A consistent footer component to be used across all pages in the application.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Custom content to display in the footer
 * @param {boolean} props.sticky - Whether the footer should be sticky at the bottom (default: true)
 * @param {string} props.className - Additional CSS classes
 */
const Footer = ({ 
  children, 
  sticky = true,
  className = "",
}) => {
  const baseClasses = "w-full bg-white border-t p-4";
  const stickyClasses = sticky ? "fixed bottom-0 left-0" : "";
  const combinedClasses = `${baseClasses} ${stickyClasses} ${className}`;

  return (
    <footer className={combinedClasses}>
      {children}
    </footer>
  );
};

/**
 * StandardFooter Component
 * 
 * A pre-configured footer with standard buttons.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onPrimaryClick - Primary button click handler
 * @param {string} props.primaryText - Primary button text (default: "Continue")
 * @param {Function} props.onSecondaryClick - Secondary button click handler
 * @param {string} props.secondaryText - Secondary button text (default: "Cancel")
 * @param {boolean} props.disablePrimary - Whether to disable the primary button
 * @param {boolean} props.sticky - Whether the footer should be sticky
 */
export const StandardFooter = ({
  onPrimaryClick,
  primaryText = "Continue",
  onSecondaryClick,
  secondaryText = "Cancel",
  disablePrimary = false,
  sticky = true,
}) => {
  return (
    <Footer sticky={sticky}>
      <div className="flex flex-row gap-3 justify-between">
        {onSecondaryClick && (
          <Button
            type="button"
            onClick={onSecondaryClick}
            variant="outline"
            className="flex-1 h-10 text-sm font-semibold rounded-xl bg-gray-100 text-[#111518] hover:bg-gray-200"
          >
            {secondaryText}
          </Button>
        )}
        <Button
          type="button"
          onClick={onPrimaryClick}
          disabled={disablePrimary}
          className="flex-1 h-10 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700"
        >
          {primaryText}
        </Button>
      </div>
    </Footer>
  );
};

/**
 * ActionFooter Component
 * 
 * A footer with a single primary action button.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onActionClick - Action button click handler
 * @param {string} props.actionText - Action button text
 * @param {boolean} props.disableAction - Whether to disable the action button
 * @param {boolean} props.sticky - Whether the footer should be sticky
 */
export const ActionFooter = ({
  onActionClick,
  actionText,
  disableAction = false,
  sticky = true,
}) => {
  return (
    <Footer sticky={sticky}>
      <div className="flex justify-center">
        <Button 
          className="w-full p-2 h-10 rounded-xl font-semibold text-base bg-blue-600 hover:bg-blue-700"
          disabled={disableAction}
          onClick={onActionClick}
        >
          {actionText}
        </Button>
      </div>
    </Footer>
  );
};

export default Footer;