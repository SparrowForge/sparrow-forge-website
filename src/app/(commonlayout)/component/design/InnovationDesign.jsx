"use client"
import Title from '../shared/Title';
import AvatarGroup from './AvatarGroup';

const InnovationDesign = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-end gap-4'>
            <div className='w-full md:w-3/5'>
                <Title
                    title="Where Ideas Turn Into Innovation"
                    subtitle="Explore expert insights, industry trends, and practical tips from our team. From software development and design to digital strategy and innovation — our blog is here to keep you informed and inspired."
                    className="flex flex-col justify-center items-start gap-2 md:gap-4 md:my-8"
                />
            </div>
            <div className='w-full md:w-1/4 flex justify-between items-center gap-2'>
                <AvatarGroup />
                <p className='opacity-50 text-[12px]'>Read 500k+ users already discovering smarter solutions through knowledge.</p>
            </div>

        </div>
    );
};

export default InnovationDesign;