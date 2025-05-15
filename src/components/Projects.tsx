
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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

            <Button variant="ghost" size="sm" className="flex items-center text-sm font-medium text-olive hover:text-opacity-80 transition-opacity">
              <a
                href="https://hawkeye.bike/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Read More About Hawkeye <FileText className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Roblox Game Development */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">Roblox Game Development</h3>
              <p className="text-muted-foreground mb-4">CTO, Independent Game Studio | Freelance Developer</p>
            </div>

            <p className="mb-4">
              Leading game development at an early-stage studio with an audience of 800+ pre-launch followers.
              Created multiple interactive Roblox games, focusing on scalable systems, responsive UI/UX,
              and performance optimization.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Highlights:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Spearheading launch of a new Roblox title targeting 800+ early followers</li>
                <li>Designed core game mechanics and modular gameplay systems</li>
                <li>Engineered reusable UI/UX patterns for consistency and responsiveness</li>
                <li>Improved frame performance by optimizing rendering and physics logic</li>
                <li>Oversaw team deliverables and collaborated with clients on specs</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-muted text-xs px-2 py-1 rounded">Lua</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Roblox Studio</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">UI/UX Design</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Game Systems Architecture</span>
            </div>
          </div>


          {/* Data Mining Class Project: SVM */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">Classification Algorithms Analysis</h3>
              <p className="text-muted-foreground mb-4">Data Mining Class Project - Lehigh University</p>
            </div>

            <p className="mb-4">
              Led the implementation and evaluation of the Support Vector Machine (SVM) classification algorithm for the Data Mining project. I focused on applying SVM to classify data from the MNIST, CIFAR-10, and Iyer datasets, tuning the model's hyperparameters and evaluating its performance using accuracy, F1 score, and AUC. The project included a thorough analysis of how different parameter settings impacted model performance across diverse types of data.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technical Highlights:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Implemented SVM for MNIST, CIFAR-10, and Iyer datasets using the scikit-learn library</li>
                <li>Performed hyperparameter tuning using GridSearchCV to optimize the regularization parameter C and kernel coefficient γ</li>
                <li>Evaluated SVM performance on each dataset using accuracy, F1 score, and AUC metrics</li>
                <li>Conducted hyperparameter sensitivity analysis to determine the best configuration for each dataset</li>
                <li>Analyzed model performance, providing insights into how SVM's performance varied with different datasets and hyperparameters</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-muted text-xs px-2 py-1 rounded">Support Vector Machine (SVM)</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">GridSearchCV</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Hyperparameter Tuning</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">scikit-learn</span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center text-sm font-medium text-olive hover:text-opacity-80 transition-opacity">
              <a
                href="/DataMining.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View Project Report <FileText className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>


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
              <span className="bg-muted text-xs px-2 py-1 rounded">Binary Classification</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Decision Trees</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Data Cleaning</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Financial Analysis</span>
            </div>

            <Button variant="ghost" size="sm" className="flex items-center text-sm font-medium text-olive hover:text-opacity-80 transition-opacity">
              <a
                href="/FinancialProject.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View Research Paper <FileText className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* JPMorgan Chase Software Engineering Simulation */}
          <div className="project-card group">
            <div className="bg-muted/50 rounded-md p-4 mb-4">
              <h3 className="text-xl font-bold text-olive mb-1">JPMorgan Chase Software Engineering Simulation</h3>
              <p className="text-muted-foreground mb-4">Software Engineering Simulation - JPMorgan Chase</p>
            </div>

            <p className="mb-4">
              Completed the Software Engineering Simulation with JPMorgan Chase, where I designed and deployed a Kafka-based transaction processing system in Spring Boot. This project focused on ensuring data integrity and optimizing transaction pipelines, helping me deepen my knowledge in distributed systems and financial software engineering.
            </p>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Technical Highlights:</h4>
              <ul className="list-disc ml-5 space-y-1">
                <li>Designed and deployed a Kafka-based transaction processing system in Spring Boot</li>
                <li>Ensured 100% data integrity in an H2 SQL database</li>
                <li>Developed transaction processing pipelines and external API interactions</li>
                <li>Used Java, Maven, and Spring frameworks for backend development</li>
                <li>Optimized system performance for handling large-scale transaction loads</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-muted text-xs px-2 py-1 rounded">Kafka</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Spring Boot</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Java</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">Maven</span>
              <span className="bg-muted text-xs px-2 py-1 rounded">SQL</span>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;
