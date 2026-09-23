
const BottomFixedSmokyLayout = ({ children }) => (
  <div className="fixed inset-x-0 bottom-0 z-20">
    <div
      className="
        mx-auto w-full px-4 py-10
        rounded-t-xl
        flex items-center justify-between
      "
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,1) 100%)",
      }}
    >
      {children}
    </div>
  </div>
);

export default BottomFixedSmokyLayout;