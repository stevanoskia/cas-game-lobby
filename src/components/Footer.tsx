export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Casino Games. All rights reserved.
        </p>
        <p className="mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
