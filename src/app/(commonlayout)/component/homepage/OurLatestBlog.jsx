import Blog from "../design/Blog";
import NewBlogDesign from "../design/NewBlogDesign";
import Button from "../shared/Button";
import Title from "../shared/Title";


const OurLatestBlog = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 md:gap-10">
            <Title
                title="Our Latest Insights"
                subtitle="Our blogs and case studies reflect our commitment to innovation, strategic thinking, and practical solutions—showing how we turn challenges into scalable digital success for businesses worldwide."
                className="flex flex-col justify-center items-center gap-4 md:my-16 md:mx-72 text-center"
            />
            <NewBlogDesign />
            <Blog />
            <div className='border border-orange p-1 rounded-full animation-zoom-out-hover text-[10px] md:text-[18px] mt-4'>
                <Button
                    image="/bannerImg/arrowRightUp.svg"
                    title="View All Blog"
                    className="bg-orange text-white text-sm md:text-[20px] px-4 md:px-6 py-2 md:py-3 rounded-full " />
            </div>
        </div>
    );
};

export default OurLatestBlog;