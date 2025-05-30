import { useState, useEffect } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import Profile_image from '../components/Profile_imageHC/Profile_image';

const NameCard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-8 px-4">
      <div className="text-center max-w-6xl mx-auto">
        <div 
          className="flex flex-col items-center p-4 md:p-8" 
          style={{ color: 'var(--base-theme-font-color-dark)' }}
        >
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center gap-8 md:gap-10 lg:gap-16 py-4 md:py-8 w-full`}>
            {/* Text content */}
            <div className="flex flex-col items-center text-center w-full md:w-1/2 p-4">
              <h1 
                className="font-['Georgia',_serif] text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                style={{ lineHeight: 1.2 }}
              >
                Rahul Gajula
              </h1>
              
              <p className="font-['Georgia',_serif] text-lg md:text-xl lg:text-2xl font-bold mb-6 max-w-md">
                {isMobile ? (
                  <>
                    Data Analyst | MS CS Student<br />
                    University of North Texas<br />
                    SQL • Power BI • Azure • Python
                  </>
                ) : (
                  <>
                    Data Analyst | MS CS Student |<br />
                    University of North Texas |<br />
                    SQL • Power BI • Azure • Python
                  </>
                )}
              </p>
              
              <div className="flex justify-center gap-6 md:gap-8 w-full">
                <a 
                  href="https://www.linkedin.com/in/rahulgajula" 
                  className="transition-transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a>
                
                {/* <a 
                  href="https://github.com/rahulgajula18" 
                  className="transition-transform hover:scale-110"
                  aria-label="Code Portfolio"
                >
                  <CodeIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a> */}
                
                <a 
                  href="https://github.com/RahulGajula" 
                  className="transition-transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon 
                    style={{ 
                      color: "var(--base-theme-font-color-dark)",
                      fontSize: isMobile ? 32 : 40 
                    }}
                  />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className={isMobile ? "w-full" : "w-4/5 transform scale-90"}>
                <Profile_image />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
