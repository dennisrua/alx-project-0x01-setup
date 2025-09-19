const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-6">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} My Next.js App
      </p>
    </footer>
  );
};

export default Footer;
