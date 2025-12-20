export default function Footer() {
  return (
    <footer className="mt-6 text-sm text-slate-300">
      <div className="max-w-5xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} ProdDepth — Product Management
          Consultancy
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="#privacy" className="hover:underline">
            Privacy
          </a>
          <a href="#terms" className="hover:underline">
            Terms
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
