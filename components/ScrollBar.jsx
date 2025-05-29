'use client'

import { React, useState } from "react";

import { useAppContext } from "@/context/AppContext";

const ScrollBar = () => {

  const { products } = useAppContext();
    
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <>
      <div className="flex flex-col items-start pt-14 px-6 md:px-16 lg:px-32">
        
        {/* scrollable div section */}
          <div className="mt-10">
            <p className="bold-8 lg:bold-12 font-medium text-gray-30">BENEFITS FOR OUR</p>
            <p className="whitespace-pre-line bold-14 lg:bold-32 text-[#1a1a65]">
              {"Procurement Services\nTo Your Business"}
            </p>
            {/* <div className="w-28 h-0.5 bg-orange-600 mt-2 mb-4"></div> */}
            <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
          </div>
          <div className="flex w-full h-[400px] justify-center mt-8">            
            {/* <div className="flex flex-col overflow-y-auto space-y-8 bg-red-200">             */}
            <div className="px-6 flex flex-col w-full border rounded-2xl overflow-y-auto">
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">1. Supplier Identification:</p>
                  <p className="text-gray-30">We utilize our extensive network, industry expertise, and market research to identify qualified suppliers that meet your specific product requirements and quality standards. Our team conducts supplier evaluations and audits to ensure their credibility and capability to fulfill your needs.</p>
              </div>
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">2. Request for Proposal (RFP) Management:</p>
                  <p className="text-gray-30">We help you prepare and manage the RFP process, including formulating detailed procurement requirements, outlining evaluation criteria, and sending out RFPs to potential suppliers. We assist in evaluating the received proposals and selecting the best-fit suppliers based on your objectives.</p>
              </div>
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">3. Contract Negotiation and Finalization:</p>
                  <p className="text-gray-30">We support you in negotiating favorable terms and conditions with selected suppliers to ensure a mutually beneficial agreement. We review all contractual details and facilitate the finalization of contracts, addressing any concerns or special requirements.</p>
              </div>
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">4. Quality Assurance and Production Monitoring:</p>
                  <p className="text-gray-30">Throughout the production cycle, we conduct rigorous product inspections and quality control checks at various stages to ensure compliance with your specified quality standards. Our team monitors the manufacturing process, conducts regular site visits, and works closely with suppliers to address any issues promptly.</p>
              </div>
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">5. Logistics and Shipping Coordination:</p>
                  <p className="text-gray-30">We handle the logistics and shipping processes to ensure prompt and reliable delivery of your products. This involves managing documentation, overseeing customs clearance, arranging transportation, and providing real-time tracking updates to ensure smooth and on-time delivery.</p>
              </div>
              <div className="shrink-0 mt-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">6. Supplier Relationship Management:</p>
                  <p className="text-gray-30">We maintain ongoing communication and relationship management with suppliers on your behalf. We serve as a single point of contact, address any inquiries or issues, and foster a collaborative partnership to support long-term success.</p>
              </div>
              <div className="shrink-0 mt-6 mb-6">                
                  <p className="bold-12 lg:bold-18 font-medium mb-2 text-[#1a1a65]">7. Performance Evaluation and Continuous Improvement:</p>
                  <p className="text-gray-30">We regularly evaluate supplier performance to ensure they meet your expectations and contractual obligations. We provide feedback to suppliers, track key performance indicators (KPIs), and collaborate on improvement initiatives to enhance future procurement processes.</p>
              </div>
            </div>
          </div>             
      </div>
    </>
  );
};

export default ScrollBar;
