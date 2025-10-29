interface AnimatedAIPillProps {
  variant?: "animated" | "simple";
}

const AnimatedAIPill = ({ variant = "simple" }: AnimatedAIPillProps) => {
  if (variant === "animated") {
    return (
      <div className="flex justify-center mb-8">
        <div className="relative rounded-full px-6 py-3">
          {/* Animated gradient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 opacity-50 blur-md animate-[spin_3s_linear_infinite]"></div>
          
          {/* Solid glass content */}
          <div className="relative glass rounded-full px-6 py-3 bg-background/80">
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
  }

  return (
    <div className="flex justify-center mb-8">
      <div className="glass rounded-full px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
          </div>
          <span className="text-sm font-medium text-foreground">Powered by AI Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedAIPill;
