const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} UMar - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
