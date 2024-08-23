import React, { useMemo } from "react";
import Navbar from "../components/navbar";
import figures from "../assets/undraw_allthedata.svg";
import PricingCard from "../components/pricingCard";

function Homepage() {
  const tiers = useMemo(
    () => [
      {
        title: "Basic",
        features: [
          "Mencatat barang masuk",
          "Mencatat barang keluar",
          "Mencatat hasil keuntungan",
        ],
        price: "Rp. 300.000 /Bulan",
      },
      {
        title: "Bussines",
        features: [
          "Mencatat barang masuk dan keluar",
          "Mencatat Keuntungan",
          "Dapat menganalisa hasil penjualan dengan CHART",
          "Support 7x24 Jam",
        ],
        price: "Rp. 500.000 /Bulan",
      },
      {
        title: "Entrepreneur",
        features: [
          "Mencatat barang masuk dan keluar",
          "Mencatat Keuntungan",
          "Dapat menganalisa hasil penjualan dengan CHART",
          "Support 7x24 Jam",
          "Export data ke Excel",
          "AI Prediksi penghasilan",
        ],
        price: "Rp. 900.000 /Bulan",
      },
    ],
    []
  );

  return (
    <>
      <div className='h-fit xl:h-screen blob-bg' id='about'>
        <Navbar />
        <div className='w-full flex flex-row justify-center xl:justify-end px-8'>
          <p className='text-2xl text-center w-full xl:w-[450px] xl:text-neutral-700 xl:mt-52 xl:mr-44 py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ullam, quidem sed minus a obcaecati necessitatibus reiciendis
            libero, non incidunt facilis consequuntur error aliquid
          </p>
        </div>
        <div className='w-full xl:w-fit h-full xl:mt-48 xl:ml-20 pt-16 xl:pt-0 px-8 flex flex-col  items-center gap-8'>
          <blockquote className='xl:text-neutral-700 text-2xl text-center'>
            <p>"Architecto laudantium maxime pariatur. Eos, tenetur!"</p>
          </blockquote>
          <img src={figures} alt='Figure pointing data' className='w-96' />
        </div>
      </div>
      <div className='h-screen' id='pricing'>
        <div className='relative h-full'>
          <div className='absolute blob-bg h-full w-full -z-10 transform -scale-y-100'></div>
          <div className='h-full w-full flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-medium text-center p-8 z-0'>
              Tier & Pricing
            </h1>
            <br />
            <div className='w-full max-w-full py-8 overflow-auto flex flex-row gap-8 items-center md:justify-center'>
              {tiers.map((tier) => (
                <PricingCard key={tier.title} {...tier} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='h-auto px-8 pb-24' id='contact'>
        <h1 className='text-6xl font-medium text-center pt-8 pb-16'>Contact</h1>
        <div className='w-full h-1/2 flex flex-col xl:flex-row gap-4 items-start'>
          <div className='h-full xl:w-1/3 p-4'>
            <div className='w-full h-full flex flex-col gap-8'>
              <div>
                <h4 className='font-medium text-2xl pb-4'>Alamat:</h4>
                <address>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime enim id saepe at soluta aliquid repudiandae suscipit!
                  Recusandae assumenda dolores commodi ea rerum, dolorum, ullam
                  tempore, velit non eligendi exercitationem.
                </address>
              </div>
              <div>
                <h4 className='font-medium text-2xl pb-4'>Kontak:</h4>
                <ul>
                  <li>
                    <a href='tel:+628123456789'>Telepon: 08123456789</a>
                  </li>
                  <li>
                    <a href='mailto:example@example.com'>
                      Email: example@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='h-auto w-full xl:w-2/3 p-4 border-t-4 xl:border-l-4 xl:border-t-0 border-[#5fcde6]'>
            <div className='w-full h-full flex flex-col'>
              <form
                action='#'
                method='get'
                className='w-full h-full flex flex-col gap-4'
              >
                <div className='flex flex-col gap-2'>
                  <label htmlFor='' className='font-medium'>
                    Email
                  </label>
                  <input
                    required
                    type='Email'
                    name='email'
                    className='w-full p-2 border-b-2 border-[#5fcde6] bg-neutral-100 outline-none'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='' className='font-medium'>
                    Name
                  </label>
                  <input
                    required
                    type='text'
                    name='name'
                    className='w-full p-2 border-b-2 border-[#5fcde6] bg-neutral-100 outline-none'
                  />
                </div>
                <div className='flex flex-col gap-2 h-full'>
                  <label htmlFor='' className='font-medium'>
                    Message
                  </label>
                  <textarea
                    required
                    name='message'
                    className='w-full h-full p-2 border-b-2 border-[#5fcde6] bg-neutral-100 outline-none'
                  />
                </div>
                <button className='ml-auto w-fit py-2 px-8 border-2 font-medium bg-[#5fcde6] rounded text-[white] transition-all hover:bg-[white] hover:text-[#5fcde6]'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
