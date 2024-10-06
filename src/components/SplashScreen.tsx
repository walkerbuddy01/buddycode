import { cn } from "../lib/utils";

function SplashScreen({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "h-screen absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SplashScreen;
