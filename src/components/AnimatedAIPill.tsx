const AnimatedAIPill = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative rounded-full px-6 py-3">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 opacity-60 blur-sm animate-[spin_3s_linear_infinite]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 opacity-40"></div>
        
        {/* Inner content */}
        <div className="relative glass rounded-full px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse [animation-delay:0.2s] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse [animation-delay:0.4s] shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
            </div>
            <span className="text-sm font-medium text-foreground">Powered by AI Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAIPill;
