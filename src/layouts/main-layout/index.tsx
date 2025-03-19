interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex flex-col items-center justify-center p-6">
      {children}
    </div>
  );
}
