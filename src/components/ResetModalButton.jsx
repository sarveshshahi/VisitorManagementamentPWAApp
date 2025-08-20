import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const ResetModalButton = () => {
  const handleReset = () => {
    // Clear the localStorage item to reset the download modal
    localStorage.removeItem('downloadModalSeen');
    // Reload the page to show the modal again
    window.location.reload();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 flex items-center gap-1 bg-white shadow-md"
      onClick={handleReset}
    >
      <RefreshCw className="h-4 w-4" />
      <span>Reset App Modal</span>
    </Button>
  );
};

export default ResetModalButton;