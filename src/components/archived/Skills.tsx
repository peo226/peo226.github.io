import myChart from './Chart'; // Import the Pie chart component


const Skills = () => {
  const programmingLanguages = [
    "Java", "Python", "C", "R", "SQL", "Dart", "Rust", "JavaScript", "HTML/CSS", "LuaU"
  ];
  
  const frameworks = [
    "React", "Flutter", "Git", "Agile", "Linux", "Atlassian", 
    "OpenAI APIs", "Data Visualization", "Data Mining"
  ];

  return (
    <section id="skills" className="bg-muted/30">
      <div className="container mx-auto">
        <h2 className="section-heading">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4 text-olive">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="skill-item">
                  {language}
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Tools */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4 text-olive">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework, index) => (
                <div key={index} className="skill-item">
                  {framework}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-olive to-tan"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
