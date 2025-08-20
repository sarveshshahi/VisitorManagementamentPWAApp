import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

/**
 * StyleGuide Component
 * 
 * This component serves as a reference for consistent styling across the application.
 * It displays various UI elements with their standard styling to ensure consistency.
 */
const StyleGuide = () => {
  // Font sizes used throughout the application
  const fontSizes = {
    xs: 'text-xs', // 12px
    sm: 'text-sm', // 14px
    base: 'text-base', // 16px
    lg: 'text-lg', // 18px
    xl: 'text-xl', // 20px
    '2xl': 'text-2xl', // 24px
  };

  // Font weights used throughout the application
  const fontWeights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Standard colors used throughout the application
  const colors = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-100 text-gray-800',
    accent: 'bg-blue-100 text-blue-800',
    destructive: 'bg-red-600 text-white',
  };

  // Standard spacing used throughout the application
  const spacing = {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Style Guide</h1>
      
      {/* Typography Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Font Sizes</h3>
            <div className="space-y-2">
              {Object.entries(fontSizes).map(([name, className]) => (
                <p key={name} className={className}>
                  {name}: This is sample text in {className}
                </p>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Font Weights</h3>
            <div className="space-y-2">
              {Object.entries(fontWeights).map(([name, className]) => (
                <p key={name} className={`text-base ${className}`}>
                  {name}: This is sample text in {className}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Buttons Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">🔍</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Color Palette Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(colors).map(([name, className]) => (
              <div key={name} className={`${className.split(' ')[0]} p-4 rounded-md`}>
                <p className={className.split(' ')[1]}>{name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Spacing Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Spacing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(spacing).map(([name, className]) => (
              <div key={name} className="flex items-center gap-4">
                <div className={`${className} bg-blue-100 rounded-md`}>
                  Box
                </div>
                <p>{name}: {className}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Header & Footer Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Header & Footer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Header</h3>
            <div className="bg-white border-b p-4 flex items-center justify-between rounded-t-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">A</div>
                <h2 className="text-xl font-bold">App Name</h2>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">🔍</Button>
                <Button variant="ghost" size="icon">👤</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Footer</h3>
            <div className="bg-white border-t p-4 flex items-center justify-between rounded-b-md">
              <p className="text-sm text-gray-500">© 2023 App Name</p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">Terms</Button>
                <Button variant="ghost" size="sm">Privacy</Button>
                <Button variant="ghost" size="sm">Help</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StyleGuide;