export const Footer = () => {
  return (
    <footer className="w-full py-4 bg-white border-t max-h-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-sm text-gray-600">
            2025{" "}
            <span className="text-amber-700">
              P<span className="text-amber-500">o</span>iT
              <span className="text-amber-500">e</span>ch
            </span>
            . All rights reserved.
          </p>
        </div>
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-600">
            Empowering developers to share knowledge
          </p>
        </div>
      </div>
    </footer>
  );
};
