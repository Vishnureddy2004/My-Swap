const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto relative">
      {/* Dots pattern for footer */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='0.8'/%3E%3Ccircle cx='50' cy='50' r='0.8'/%3E%3Ccircle cx='30' cy='30' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://i.ibb.co/9S4pFRv/profile.jpg"
            alt="Creator"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Created by{' '}
              <a
                href="https://x.com/OrugalluVishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                @OrugalluVishnu
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Powered by{' '}
              <span className="text-primary-600 font-medium">Anoma</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;