import React, { useState } from "react";
import Card from "./Card";
import Arka_Biswas from "../../assets/team/CoreTeam2k24/Arka Biswas.webp";
import Bisal_Kumar from "../../assets/team/CoreTeam2k24/Bisal Kumar.webp";
import Kushal_Ghosh from "../../assets/team/CoreTeam2k24/Kushal Ghosh.webp";
import Nisha_Yadav from "../../assets/team/CoreTeam2k24/Nisha Yadav.webp";
import Protiti_Saha from "../../assets/team/CoreTeam2k24/Protiti Saha.webp";
import Saikat_Paikar from "../../assets/team/CoreTeam2k24/Saikat Paikar.webp";
import Saikat_Sarkar from "../../assets/team/CoreTeam2k24/Saikat Sarkar.webp";
import Sastipada_Dan from "../../assets/team/CoreTeam2k24/Sastipada Dan.webp";
import Shourjendra_Banerjee from "../../assets/team/CoreTeam2k24/Shourjendra Banerjee.webp";
import Soham_Sen from "../../assets/team/CoreTeam2k24/Soham Sen.webp";
import Soumya_Samanta from "../../assets/team/CoreTeam2k24/Soumya Samanta.webp";
import Sourav_Ghosh from "../../assets/team/CoreTeam2k24/Sourav Ghosh.webp";
import Souvik_Biswas from "../../assets/team/CoreTeam2k24/Souvik Biswas.webp";
import Sushant_Kumar_Gupta from "../../assets/team/CoreTeam2k24/Sushant Kumar Gupta.webp";
import Tunnisha_Das_Gupta from "../../assets/team/CoreTeam2k24/Tunnisha Das Gupta.webp";
import Uttaran_Nath_Sarkar from "../../assets/team/CoreTeam2k24/Uttaran Nath Sarkar.webp";
import V_Nikhita from "../../assets/team/CoreTeam2k24/V Nikhita.webp";
import Wasim_Reja from "../../assets/team/CoreTeam2k24/Wasim Reja.webp";

const CoreTeam = () => {
  const [show, setShow] = useState(false);
  const [currentInd, setCurrentInd] = useState(null);
  const coreTeamDetails = [
    {
      name: "UTTARAN NATH SARKAR",
      designation: "Secretary & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/uttaran-nath-sarkar-148498203",
      imgLink: Uttaran_Nath_Sarkar,
      github: "",
    },
    {
      name: "SASTIPADA DAN",
      designation: "Cashier & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sastipada-dan-266019203",
      imgLink: Sastipada_Dan,
      github: "",
    },
    {
      name: "V. NIKHITA",
      designation: "Cashier & English Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nikhita28",
      imgLink: V_Nikhita,
      github: "",
    },
    {
      name: "WASIM REJA",
      designation: "Media, Web & Technical Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/wasimreja/",
      imgLink: Wasim_Reja,
      github: "",
    },
    {
      name: "BISAL KUMAR",
      designation: "Strategist & Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/bisal-kumar-97459122a",
      imgLink: Bisal_Kumar,
      github: "",
    },
    {
      name: "PROTITI SAHA",
      designation: "Strategist & Event Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/protiti-saha-b91028203/",
      imgLink: Protiti_Saha,
      github: "",
    },
    {
      name: "NISHA YADAV",
      designation: "Strategist & Hindi Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nisha-yadav-2950351ab/",
      imgLink: Nisha_Yadav,
      github: "",
    },
    {
      name: "SOHAM SEN",
      designation: "English Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/nuclearcactus/",
      imgLink: Soham_Sen,
      github: "",
    },
    {
      name: "TUNNISHA DAS GUPTA",
      designation: "English Editor",
      department: "Civil Engineering",
      linkedin: "https://www.linkedin.com/in/tunnisha-das-gupta-a43231204/",
      imgLink: Tunnisha_Das_Gupta,
      github: "",
    },
    {
      name: "SOURAV GHOSH",
      designation: "Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sourav-ghosh-02b3ba213",
      imgLink: Sourav_Ghosh,
      github: "",
    },
    {
      name: "SUSHANT KUMAR GUPTA",
      designation: "Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/sushantkumargupta2001",
      imgLink: Sushant_Kumar_Gupta,
      github: "",
    },
    {
      name: "SAIKAT PAIKAR",
      designation: "Design Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/saikat-paikar-905a70207",
      imgLink: Saikat_Paikar,
      github: "",
    },
    {
      name: "ARKA BISWAS",
      designation: "Design Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/arka-biswas-859428203/",
      imgLink: Arka_Biswas,
      github: "",
    },
    {
      name: "SOUMYA SAMANTA",
      designation: "Artwork Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/soumya-samanta-b55426203",
      imgLink: Soumya_Samanta,
      github: "",
    },
    {
      name: "SOUVIK BISWAS",
      designation: "Photography Head",
      department: "Electronics & Communication Engineering",
      linkedin: "https://www.linkedin.com/in/souvik-biswas-84b766246/",
      imgLink: Souvik_Biswas,
      github: "",
    },
    {
      name: "KUSHAL GHOSH",
      designation: "Photography Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/kushaljgec2025/",
      imgLink: Kushal_Ghosh,
      github: "",
    },
    {
      name: "SHOURJENDRA BANERJEE",
      designation: "Social Media Head & Event Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/shourjendra-banerjee-82589422a/",
      imgLink: Shourjendra_Banerjee,
      github: "",
    },
    {
      name: "SAIKAT SARKAR",
      designation: "Social Media Head",
      department: "Mechanical Engineering",
      linkedin: "https://www.linkedin.com/in/saikat-sarkar-259021203",
      imgLink: Saikat_Sarkar,
      github: "",
    },
  ];

  return (
    <div className="bg-[#EEEEEE] w-full">
      <h1 className="text-center text-5xl p-10 text-[#295C7A]">
        Meet the Core Team
      </h1>
      <div>
        <div className="flex max-w-8xl mx-auto justify-center items-center flex-wrap gap-x-20 gap-y-4 p-10">
          {coreTeamDetails.map((details, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center justify-start w-48 h-72 gap-4"
            >
              <div className="relative ">
                <img
                  height={150}
                  width={150}
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full mx-auto w-44 h-44"
                />
                <button
                  onClick={() => {
                    setShow(true);
                    setCurrentInd(ind);
                  }}
                  className="absolute bottom-4 right-[-3px] rounded-full py-[6px] px-[15px] bg-transparent "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#0f0f0f"
                    viewBox="0 0 20 20"
                    className="white shadow-md rounded-full"
                  >
                    <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-center font-bold">{details.name}</p>
                <p className="text-center">{details.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Card
        onClose={() => setShow(false)}
        show={show}
        details={coreTeamDetails[currentInd]}
      />
    </div>
  );
};

export default CoreTeam;
