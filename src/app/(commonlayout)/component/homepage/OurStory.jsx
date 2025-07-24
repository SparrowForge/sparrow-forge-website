
import OurStoryDesignLeft from '../design/OurStoryDesignLeft';
import OurStoryDesignRight from '../design/OurStoryDesignRight';


const OurStory = () => {
    return (
        <div id="teams" className='bg-gray mx-2 md:mx-0 px-4 py-6 md:p-6 flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0 rounded-4xl'>
        <div className='w-full md:w-3/5'>
                <OurStoryDesignLeft/>
        </div>
        <div className='w-full md:w-2/5'>
            <OurStoryDesignRight/>
        </div>
            
        </div>
    );
};

export default OurStory;