import React from "react";
import { reviews } from "../Constatns";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews =props =>{
    return (
        <section>
            <div className="max-container">
                <h3 className="font-palanquin 
                text-center text-4xl font-bold">What Our <span className="text-[#ff5040]">Customers </span>Say?
                </h3>  
                <p className="mt-4 info-text mr-auto text-center
                 text-lg text-slate-gray">hear genuine stories from our satisfied Customers about thier exceptional experience with us</p>
                <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                    {reviews.map((review)=>(
                        <ReviewCard
                        key={review.customerName}
                        img={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default CustomerReviews;