
const About = () => {
  return (
    <section id="about" className="bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-border">
              <h4 className="font-medium text-lg">B.S. in Computer Science with a Minor in Data Science</h4>
              <p className="text-muted-foreground">Lehigh University, P.C. Rossin College of Engineering</p>
              <p className="text-muted-foreground">Expected Graduation: May 2026</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="mb-4">
              My academic journey has been focused on building a strong foundation in algorithm design, data structures, and 
              artificial intelligence principles.
            </p>
            <p>
              I'm super interested in exploring how AI and machine learning can enhance 
              user experiences in both traditional software applications and interactive media. 
              My goal is to continue developing my skills and knowledge to contribute meaningfully 
              to these fields after graduation.
            </p>
            <p className="mb-4">
              Outside of my coursework, I spend my time developing my skills in game development, 
              specifically using the Roblox platform. This creative outlet allows me to combine my 
              technical knowledge with my passion for creating interactive and engaging experiences.
            </p>

          </div>
          
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                <span>CS major w/ focus on Data Science, AI & ML</span>
              </li>
              <li className="flex items-start">
                <div className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                <span>Freelance game developer on Roblox platform</span>
              </li>
              <li className="flex items-start">
                <div className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                <span>Experience with various programming languages and frameworks</span>
              </li>
              <li className="flex items-start">
                <div className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</div>
                <span>Passionate about technology education and mentorship</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
