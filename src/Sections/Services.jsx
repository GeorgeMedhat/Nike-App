import React from "react";
import { services } from "../Constatns";
import ServiceCard from "../components/ServiceCard";


const Services = props =>{
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
            {services.map((service)=>(<ServiceCard
                img={service.imgURL}
                label={service.label}
                subtext={service.subtext}
                
            />))}
        </section>
    );
}

export default Services;