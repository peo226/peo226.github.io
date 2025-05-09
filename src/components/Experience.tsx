
const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-heading">Professional Experience</h2>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-olive/30"></div>
          
          {/* Experience Item 1 */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-start">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-olive border-4 border-background z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 md:pr-12 md:text-right ml-8 md:ml-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-olive mb-1">Software Development Intern</h3>
                  <h4 className="font-medium text-lg mb-2">Lehigh University</h4>
                  <p className="text-muted-foreground mb-4">March 2025 - May 2025</p>
                  <ul className="list-disc ml-5 space-y-2 text-left">
                    <li>Developed an admin interface for user role management using JavaScript, React, and SQL</li>
                    <li>Built REST APIs and implemented OAuth for enhanced security</li>
                    <li>Supported academic integrity initiatives through platform tools</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-olive border-4 border-background z-10"></div>
              
              {/* Content */}
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="md:w-1/2 md:pl-12 ml-8 md:ml-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-xl text-olive mb-1">IT Intern / STEM Instructor</h3>
                  <h4 className="font-medium text-lg mb-2">Lavner Education</h4>
                  <p className="text-muted-foreground mb-4">June 2023 - August 2023</p>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Instructed students in STEM topics and maintained lab equipment</li>
                    <li>Delivered hands-on, tech-focused educational sessions</li>
                    <li>Collaborated with team members to develop engaging learning materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
