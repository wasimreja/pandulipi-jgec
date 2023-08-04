import React from "react";
import "./library.css";
import ToggleVisibility from "./ToggleShow";
import MagazineMore from "./MoreMagazines";
import cover_2023 from "../../assets/img/2023.webp";
import cover_2022 from "../../assets/img/2022.webp";
import cover_2021 from "../../assets/img/2021.webp";
import cover_2020 from "../../assets/img/2020.webp";
import cover_2019 from "../../assets/img/2019.webp";

const Magazine = () => {
  const magazineDetails = [
    {
      name: "Pandulipi",
      year: "2023",
      imgLink: cover_2023,
      downloadLink:
        "https://drive.google.com/file/d/1P8tRJWrcVIaFiIfCvw3tyLu_YIqMx3jI/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2022",
      imgLink: cover_2022,
      downloadLink:
        "https://drive.google.com/file/d/1_Vns8sZ8BR2LQG0Lb7Xu1BCue30P1Vsm/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2021",
      imgLink: cover_2021,
      downloadLink:
        "https://drive.google.com/file/d/1Jc6S6R1M8i8KdoAQErpLP5mLN2-ew-Sj/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2020",
      imgLink: cover_2020,
      downloadLink:
        "https://drive.google.com/file/d/1zQoMh1adIQATjMWDGpNwS9SvPK2b4osV/view?usp=share_link",
    },
    {
      name: "Pandulipi",
      year: "2019",
      imgLink: cover_2019,
      downloadLink:
        "https://drive.google.com/file/d/1SzjOeg_rO8C1nhaj24hkkNU5HREWrQFH/view?usp=share_link",
    },
  ];

  return (
    <div className=" max-w-7xl mx-auto px-5">
      <h4 className="text-center xl:text-left font-semibold pb-10 text-4xl">
        Latest Editions of Pandulipi
      </h4>
      <div className="flex flex-col flex-wrap items-center justify-center  gap-x-5 gap-y-8 md:flex-row">
        {magazineDetails.map((details, index) => (
          <div
            key={index}
            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div
              className="relative overflow-hidden rounded-t-lg bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                height={300}
                width={300}
                src={details.imgLink}
                className="rounded-t-lg bg-top h-96 w-96 md:w-72 object-cover"
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-4 pb-6 font-semibold">
              <h5 className="leading-tight text-xl text-neutral-800 dark:text-neutral-50">
                {details.name}
              </h5>
              <p className="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
                {details.year}
              </p>
              <a
                href={details.downloadLink}
                target="_blank"
                className="inline-block rounded bg-slate-800 font-bold px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="more">
        <ToggleVisibility>
          <MagazineMore />
        </ToggleVisibility>
      </div>
    </div>
  );
};

export default Magazine;
