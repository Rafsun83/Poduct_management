import React from "react";

export default function About() {
  const aboutSections = [
    {
      id: 1,
      title: "Quality Assurance",
      description:
        "Each product goes through rigorous quality checks to ensure it meets our high standards.",
    },
    {
      id: 2,
      title: "Sustainability",
      description:
        "We are committed to sustainable sourcing and eco-friendly packaging for a greener future.",
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description:
        "Our priority is your satisfaction, with responsive support and a smooth shopping experience.",
    },
    {
      id: 4,
      title: "Fast Shipping",
      description:
        "Get your orders quickly with our reliable and expedited shipping options.",
    },
    {
      id: 5,
      title: "Secure Payments",
      description:
        "Shop with confidence using our secure and convenient payment gateways.",
    },
    {
      id: 6,
      title: "Exclusive Deals",
      description:
        "Enjoy exclusive discounts and promotions only available on our website.",
    },
    {
      id: 7,
      title: "Wide Product Range",
      description:
        "Find everything you need, from electronics to home essentials, all in one place.",
    },
    {
      id: 8,
      title: "Easy Returns",
      description:
        "Not satisfied? We offer hassle-free returns and exchanges to make shopping worry-free.",
    },
    
  ];

  return (
    <div className="p-4">
      {aboutSections?.map((item, index) => {
        return (
          <div className="bg-white shadow-md text-left p-5 rounded mb-2">
            <h5 className="text-coral">{item.title}</h5>
            <p className="text-sm">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
