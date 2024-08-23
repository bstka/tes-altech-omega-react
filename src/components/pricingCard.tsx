import React from "react";

interface IPricingCardProps {
  title: string;
  features: string[];
  price: string;
  key: string;
}

function PricingCard({ title, features, price }: IPricingCardProps) {
  return (
    <div className='min-w-72 max-w-72 min-h-96 self-stretch flex-1 bg-white border-2 border-t-8 border-[#5fcde6] rounded-xl p-8 transition-all hover:-translate-y-2'>
      <div className='w-full h-full flex flex-col gap-2'>
        <h1 className='text-center font-bold text-2xl tracking-wide'>
          {title}
        </h1>
        <h2 className='text-sm italic text-center'>Fitur</h2>
        <ol type='a' className='text-sm list-decimal leading-relaxed'>
          {features.map((feature) => (
            <li key={feature.replace(/\s/g, "")} className='font-medium'>{feature}</li>
          ))}
        </ol>
        <hr className="mt-auto pt-2" />
        <div className='text-center p'>
          <h3 className="font-medium">Harga</h3>
          <h3 className='pt-4 font-semibold'>{price}</h3>
        </div>
        <button className='py-2 px-8 border-2 font-medium bg-[#5fcde6] rounded text-[white] transition-all hover:bg-[white] hover:text-[#5fcde6]'>
          Join Sekarang
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
