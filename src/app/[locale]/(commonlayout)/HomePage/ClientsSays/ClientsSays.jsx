import ClientsSaysHeader from "../../components/ClientsSays/ClientsSaysHeader";
import ClientsSaysSlider from "../../components/ClientsSays/ClientsSaysSlider";

const ClientsSays = () => {
    return (
        <div className='bg-lightblue/10 w-full'>
            <div className="md:w-[1194px] mx-auto flex flex-col items-start py-10 px-4">
                <ClientsSaysHeader />
                <ClientsSaysSlider/>
            </div>
        </div>
    );
};

export default ClientsSays;