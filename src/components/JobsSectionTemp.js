import HighlightText from "./HighlightText";
// const jobTitle = [
//   "C-Level Executives",
//   "Senior Management",
//   "Middle Management",
//   "Specialists And Analysts",
// ];

const jobTitlePosts = [
  "VP /Head of Digital Transformation",
  "Group Head Digital Transformation",
  "Head of Digital Integration",
  "Head of Robotic Process Automation",
  "Chief Data Scientist",
  "Chief Innovation Officer",
  "Chief Information Officer",
  "Chief Technology Officer",
  
  // "Chief Analytics Officer (CAO) ",
  // "Chief Data & Analytics Officer (CDAO)",
  // "Chief Data Privacy Officer (CDPO)",
  // "Chief Financial Officer (CFO)",
  // "Chief Strategy Officer (CSO)",

  "Head of Digital Banking",
  "Chief Digital Officer",
  "Head of Data Governance",
  "Head of Data Science and Analytics",
  "Head of Data Engineering",
  // "Vice President (VP) of Analytics",
  // "Vice President (VP) of Strategy",
  // "Vice President (VP) of Operations",

  "Integration Architects",
  "Digital Advisors - Government sector",
  "Procurement Heads – Digital",
  // "Director of Data Science",
  // "Director of Business Intelligence",
  // "Director of Analytics",
  // "Director of Strategy",
  // "Director of Operations",
  // "Director/Head of CRM",

  // "Data Scientist",
  // "Data Analyst",
  // "Data Engineer",
  // "Data Architect",
  // "Business Intelligence Analyst",
  // "Business Analyst",
  // "Analytics Manager",
  // "Database Administrator (DBA)",
  // "Data Governance Manager",
  // "Data Visualization Specialist",
  // "Machine Learning Engineer",
  // "AI Engineer",
  // "Statistician",
  // "Quantitative Analyst",
  // "Predictive Modeler",
];

const JobsSectionTemp = () => {
  return (
    <div
     className="flex flex-col items-center max-w-[1200px] p-8 bg-[#00082000] text-black rounded-lg shadow-lg">

      <div className="flex flex-col gap-5 justify-center">
        <h1 className="lg:w-[100%] text-center text-4xl font-mullish font-bold">
          BY JOB <HighlightText text={" TITLE"} />
        </h1>
        <div className="w-11/12 h-1  bg-white mx-auto"></div>
      </div>

      {/* <div className="mt-5"> */}

        {/* <h2 className="text-center text-xl font-bold font-mullish">
         BY JOB TITLE
        </h2> */}

        {/* <div className="flex flex-wrap justify-center mt-7 gap-6 ">
              {jobTitle.map((category, index) => (
                <div
                  key={index}
                  className="px-6 py-2 border  border-gray-400 rounded-full text-xl  hover:bg-gray-300 hover:text-[#000814] transition-colors duration-300 cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div> */}

      {/* </div> */}

      <div className="mt-8">
        <div className="flex flex-wrap justify-center mt-4 gap-4">
          {jobTitlePosts.map((title, index) => (
            <div
              key={index}
              className="px-4 py-2 border border-red-500 rounded-full text-lg hover:bg-deepBlueHead hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsSectionTemp;
