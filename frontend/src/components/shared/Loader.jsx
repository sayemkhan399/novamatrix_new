import logo from "../../assets/Nova.svg";

function Loader({ fullScreen = false }) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-[#f7fffa] ${
        fullScreen ? "min-h-screen" : "min-h-40"
      }`}
      role="status"
      
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-40 w-40 items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-spin rounded-full border-[3px] border-emerald-100 border-r-orange-500 border-t-emerald-600 motion-reduce:animate-none"
          />
          <img src={logo} alt="" className="relative h-20 w-36 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
