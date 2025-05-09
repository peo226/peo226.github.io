
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Treasury Yield Prediction Project */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">Treasury Yield Prediction Model</h3>
              <p className="text-muted-foreground mb-4">Data Science Group Project - Lehigh University</p>
            </div>
            
            <p className="mb-4">
              Developed a machine learning model to predict the U.S. 10-Year Treasury Yield for investors using 
              supervised learning and linear regression. The project combined data science methodologies with 
              financial domain knowledge to create a predictive model with improved accuracy.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technical Highlights:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Created linear regression models using economic indicators as features</li>
                <li>Implemented binary classification for yield direction prediction with 75% accuracy</li>
                <li>Reduced Mean Absolute Error (MAE) by 15% compared to baseline</li>
                <li>Performed data cleaning and feature engineering in R Studio</li>
                <li>Applied feature selection algorithms to optimize model performance</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-muted text-xs px-2 py-1 rounded">R</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Linear Regression</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Decision Trees</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Data Cleaning</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Financial Analysis</span>
            </div>
            
            <Button variant="ghost" size="sm" className="flex items-center text-sm font-medium text-olive hover:text-opacity-80 transition-opacity">
              <a 
                href="/Treasury-Yield-Prediction-Project.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View Research Paper <FileText className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>
          
          {/* AI/ML Capstone Project */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">Hawkeye Cyclist Safety Device (Skillion)</h3>
              <p className="text-muted-foreground mb-4">AI/ML Capstone Project</p>
            </div>
            
            <p className="mb-4">
              Real-time object detection system for cyclist safety utilizing advanced computer vision 
              and machine learning technologies. The project focused on improving safety through 
              early detection and warning of potential hazards.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technical Highlights:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Implemented YOLOv8/YOLOv11 for efficient object detection</li>
                <li>Focused on depth prediction, model optimization, and dataset expansion</li>
                <li>Utilized TensorFlow, Keras, Python, and TensorBoard</li>
                <li>Collaborated with startup founders following Agile methodologies</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-muted text-xs px-2 py-1 rounded">TensorFlow</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Keras</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Python</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">YOLO</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Computer Vision</span>
            </div>
          </div>
          
          {/* Roblox Game Development */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">Roblox Game Development Portfolio</h3>
              <p className="text-muted-foreground mb-4">Freelance Developer</p>
            </div>
            
            <p className="mb-4">
              Created interactive game projects as a freelance developer on the Roblox platform, 
              combining programming skills with game design principles to deliver engaging user experiences.
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Project Scope:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Developed interactive game mechanics and systems</li>
                <li>Implemented efficient UI/UX design patterns</li>
                <li>Optimized performance for smooth gameplay experience</li>
                <li>Collaborated with clients to meet project specifications</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-xs px-2 py-1 rounded">Lua</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Game Development</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">UI/UX Design</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Roblox Studio</span>
            </div>
            
            <a 
              href="https://create.roblox.com/talent/creators/21206181" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-olive hover:text-opacity-80 transition-opacity"
            >
              View Roblox Talent Profile <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
