import { X } from "lucide-react";

export default function MobileMenu({ open, onClose, navLinks }) {
  if (!open) return null; 
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="md:hidden"
    >
      <div className="px-6 pb-6">
        <div className="bg-white/4 rounded-2xl p-4 border border-white/20 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="font-medium">Menu</div>
            <button
              aria-label="close menu"
              onClick={onClose}
              className="p-2 rounded-md bg-transparent"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="py-2 px-3 rounded-md hover:bg-white/6 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-block px-4 py-2 rounded-md bg-sky-600"
            >
              Request Assessment
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
