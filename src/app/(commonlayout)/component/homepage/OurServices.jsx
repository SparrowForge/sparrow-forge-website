
import Title from '../shared/Title';
import Button from '../shared/Button';
import Services from '../design/Services';

const OurServices = () => {
    return (
          <div className="flex flex-col justify-center items-center gap-2 md:gap-10">
            <button className='bg-gray rounded-full px-2 py-1'>Smart solutions 🛠️</button>
            <Title title="Our Services" subtitle="We’re dedicated to creating custom digital solutions that combine thoughtful design, smooth functionality, and dependable performance—helping your business succeed online with ease and confidence." />
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