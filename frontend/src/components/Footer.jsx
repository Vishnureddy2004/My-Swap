const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;