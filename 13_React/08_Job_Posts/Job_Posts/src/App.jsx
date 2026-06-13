import React from "react";
import Cards from "./Components/Cards";
import "./App.css";
const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yjN6eMz9_d8jJphdQV0QMyMNk1MRyuYX_kiX9FaCBg&s=10",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaL-7RRx5SW9qx4AJw4mjQHfar35O2ScabD2zkXUV8kg&s=10",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5lDBX1-oZjfTuXNWEX0XRRu66iIX-w-WRqn7mKCAmA&s=10",
      companyName: "Apple",
      datePosted: "4 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaHC_9YxqnPCCaadcefalsMg2EOkjYOedtUHk1DvhWQ&s=10",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "ReactJS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D4nFNOnLAogu3zdDdJbOT1tcU6AdxojJ6eulZ44gQ&s=10",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Software Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Delhi, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoK7gW4_tjcow7_Pj_mo74Rz5lWMBr-jDqwdsyaaSfQ&s=10",
      companyName: "Airbnb",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
      companyName: "Salesforce",
      datePosted: "12 days ago",
      post: "React Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((elem) => (
        <Cards
          logo={elem.brandLogo}
          company={elem.companyName}
          date={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
        />
      ))}
    </div>
  );
};

export default App;
