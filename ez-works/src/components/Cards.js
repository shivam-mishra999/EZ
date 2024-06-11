import React from 'react';
import DesignIcon from '../assets/DesignIcon.png';
import CameraIcon from '../assets/CameraIcon.png';
import TranslationIcon from '../assets/TranslationIcon.png';
import GraphicDesignIcon from '../assets/GraphicDesignIcon.png';
import ResearchIcon from '../assets/ResearchIcon.png';
import DataProcessingIcon from '../assets/DataProcessingIcon.png';
import './Cards.css';

const cards = [
    {icon: DesignIcon, title: "Presentation Design" },
    {icon: CameraIcon, title: "Audio-Visual Production" },
    {icon: TranslationIcon, title: "Translation Services" },
    {icon: GraphicDesignIcon, title: "Graphic Design" },
    {icon: ResearchIcon, title: "Research & Analytics" },
    {icon: DataProcessingIcon, title: "Data Processing" }
]

export default function Cards() {
  return (
    <div className="cards-container">
        {cards.map((item, index) => (
            <div key={index} className="card">
                <div className="card-row-1">
                    <div className="icon">
                        <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="title">
                        <p>{item.title}</p>
                    </div>
                </div>
                <div className="card-content">
                    <p>Lorem ipsum dolor sit<br /> amet, lorem ipsum<br /> dolor sit amet. Lorem<br /> ipsum dolor sit amet</p>
                </div>
            </div>
        ))};
    </div>
  )
}
