import React, { useState } from 'react'
import Modal from './Modal';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './style.css';
import RabindraJayanti22 from "../../assets/events/Rabindra Jayanti 2022.webp"
import WorldPoetryDay from "../../assets/events/World Poetry Day.webp"
import WallMagazine from "../../assets/events/Wall Magazine.webp"
import BudSpeak from "../../assets/events/BudSpeak.webp"
import RabindraJayanti23 from "../../assets/events/Rabindra Jayanti 2023.webp"
import AnnualMagazine from "../../assets/events/Annual Magazine.webp"
import AnnualMagazine1 from "../../assets/events/Annual Magazine (1).webp"

const Album1 = () => {
    const column1 = [
        {
            "name": "Rabindra Jayanti 2022",
            "imgLink": RabindraJayanti22
        },
        {
            "name": "Rabindra Jayanti 2023",
            "imgLink": RabindraJayanti23

        },
    ]
    const column2 = [
        {
            "name": "World Poetry Day",
            "imgLink": WorldPoetryDay
        },
        {
            "name": "Annual Magazine",
            "imgLink": AnnualMagazine

        },
    ]
    const column3 = [
        {
            "name": "Wall Magazine",
            "imgLink": WallMagazine
        },
        {
            "name": "Annual Magazine",
            "imgLink": AnnualMagazine1

        },
    ]
    const column4 = [
        {
            "name": "BudSpeak",
            "imgLink": BudSpeak
        },
    ]

    const imagePerColumn = 6;
    const [next, setNext] = useState(imagePerColumn);
    const [show, setShow] = useState(false);
    const [source, setSource] = useState("");
    const [btnText, setBtnText] = useState("Load More");

    const handleMoreImage = () => {
        if(next >= (Math.max(column1.length, column2.length, column3.length, column4.length)-imagePerColumn))
        {
            setBtnText("Show Less")
            setNext(imagePerColumn)
        }
        else{
            setBtnText("Load More")
            setNext(next + imagePerColumn);
        }
    };

    // var a;
    var a = "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg";

    function set(p) {
        a = p;
        // setShow(true);
    }


    return (
        <>
            <div id='row'>
                {/* <div id='row' className='flex flex-wrap py-0 px-6'> */}
                <div className='column'>
                    {column1.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                                setSource(details.imgLink);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>

                    ))}
                </div>
                <div className='column'>
                    {column2.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                                setSource(details.imgLink);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column3.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setSource(details.imgLink);
                                setShow(true);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>
                <div className='column'>
                    {column4.slice(0, next).map((details) => (
                        <div>
                            <LazyLoadImage onClick={() => {
                                { set(details.imgLink) };
                                setShow(true);
                                setSource(details.imgLink);
                            }} src={details.imgLink} alt={details.name} className='myImg' />
                        </div>
                    ))}
                </div>

            </div>

            <Modal onClose={() => setShow(false)} show={show}>
                <LazyLoadImage src={source} />
            </Modal>
            
            {/* <div className='flex flex-wrap justify-center'>
                <button type='button' className="cursor-pointer inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]" onClick={handleMoreImage}>{btnText}</button>
            </div> */}
        </>
    )
}

export default Album1