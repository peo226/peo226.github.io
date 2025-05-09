
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-tan mb-1">Prince Omuyeh</h2>
            <p className="text-sm text-white/70">Software Engineer | Machine Learning Enthusiast | Game Developer</p>
          </div>
          
          <div className="text-sm text-white/70">
            <p>© {currentYear} Prince Omuyeh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
