const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-[#ffee00]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-[#d9d9d9] mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-2 rounded-full bg-[#ffee00] text-[#080b11] font-semibold shadow-md transition hover:bg-[#ffd600]">Go Back</a>
    </main>
  );
};

export default NotFound;

