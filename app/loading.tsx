export default function Loader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative animate-rotate w-16 h-16">
        <span className="absolute block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] rounded-full -translate-x-[28px] -translate-y-[28px] animate-shape1"></span>
        <span className="absolute block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] rounded-full translate-x-[28px] -translate-y-[28px] animate-shape2"></span>
        <span className="relative block h-16 w-16 bg-[#f23f3f] border border-[#f23f3f] scale-[0.98] rotate-[-45deg] animate-shape3"></span>
      </div>
      <div className="mt-8 h-4 w-16 rounded-full bg-[#d9d9d9] border border-[#d9d9d9] animate-shadow"></div>
    </div>
  );
}
