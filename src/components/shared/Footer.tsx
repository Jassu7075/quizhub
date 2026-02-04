import { Link } from "react-router-dom";
import { BookOpen, Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Quiz Dashboard", path: "/quiz" },
      { name: "Leaderboard", path: "/leaderboard" },
      { name: "About", path: "/about" },
    ],
    subjects: [
      { name: "C++ Quiz", path: "/quiz/cpp" },
      { name: "Python Quiz", path: "/quiz/python" },
      { name: "Java Quiz", path: "/quiz/java" },
      { name: "HTML Quiz", path: "/quiz/html" },
      { name: "Aptitude Quiz", path: "/quiz/aptitude" },
    ],
    connect: [
      { name: "Contact Us", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-card/80 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl text-foreground">QuizHub</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering students with interactive MCQ quizzes for academic excellence.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Github className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </a>
              <a 
                href="mailto:contact@quizhub.com"
                className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Subjects</h4>
            <ul className="space-y-2">
              {footerLinks.subjects.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} QuizHub. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-cta" /> by Jakkam Jaswanth Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
