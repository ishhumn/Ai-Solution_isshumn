const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/0e1bee28-df61-44f0-af72-88b52fa726e3.png" 
        alt="AI Logo" 
        className="h-8 w-auto"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
        AI Solutions
      </span>
    </div>
  );
};

export default Logo;