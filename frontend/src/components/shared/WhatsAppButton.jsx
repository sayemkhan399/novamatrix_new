import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "8801768639060"; 

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      
      {/* Tooltip */}
      <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:right-20">
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}