import React from "react";
import Button from "../components/Button";
import {offer} from '../assets/images'
import { arrowRight } from "../assets/icons";

const SpecialOffer =props =>{
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
            <div className="flex-1 ">
                <img 
                    src={offer}
                    alt=""
                    width={733}
                    height={678}
                    className="object-contain w-full"
                />
            </div>

            <div className="flex flex-1 flex-col">
                
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-[#ff5040] ">
                    Special
                    </span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                Embark on a shopping journey that redefines your experience
                with unbeatable deals. From premier selections to incredible
                savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 max-w-lg info-text">
                Navigate a realm of possibilities designed to fulfill your unique
                desires, surpassing the loftiest expectations. Your journey with
                us is nothing short of exceptional
                </p>
                <div className="mt-11 flex gap-4">
                <Button withIcon={true} icon={arrowRight} label="Shop Now"/>
                <Button t={true} label="Learn more"/>
                </div>

                
                
            </div>
        </section>
    );
}

export default SpecialOffer;