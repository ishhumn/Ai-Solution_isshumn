const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-padding py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-center">

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
