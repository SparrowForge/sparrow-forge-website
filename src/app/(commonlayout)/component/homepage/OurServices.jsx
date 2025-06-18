
import Title from '../shared/Title';
import Button from '../shared/Button';
import Services from '../design/Services';
import ButtonTitle from '../shared/ButtonTitle';

const OurServices = () => {
    return (
          <div className="flex flex-col justify-center items-center gap-2 md:gap-10">
            <ButtonTitle title="Smart solutions 🛠️" />
            <Title title="Our Services" subtitle="We craft custom software and mobile applications tailored precisely to your business needs. Whether you're starting from a vision or solving a complex challenge, we turn your requirements into seamless, reliable digital solutions—delivered with care, precision, and client satisfaction at the core." 
            className="flex flex-col justify-center items-center gap-4 my-4 md:mx-72 text-center"
            />
           <Services/>
            <div className='border border-orange p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                <Button
                    image="/bannerImg/arrowRightUp.svg"
                    title="View All Services"
                    className="bg-orange text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />
            </div>
        </div>
    );
};

export default OurServices;