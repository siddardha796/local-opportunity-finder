const AnimatedAIPill = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative group">
        {/* Animated gradient border */}
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-blue-500 via-green-500 via-red-500 to-blue-500 opacity-75 blur-sm animate-[spin_3s_linear_infinite] bg-[length:200%_200%]"></div>
        
        {/* Pill content */}
        <div className="relative flex items-center gap-2 px-6 py-2 bg-background rounded-full border-2 border-transparent">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse [animation-delay:0.4s]"></span>
          </div>
          <span className="text-sm font-medium text-foreground">Powered by AI Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAIPill;
