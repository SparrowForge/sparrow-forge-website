import React from 'react';
import ButtonTitle from '../shared/ButtonTitle';
import Title from '../shared/Title';
import InnovationDesign from '../design/InnovationDesign';
import InnovationList from '../design/InnovationList';

const Innovation = () => {
    return (
        <div id="career" className='mx-4 md:mx-10 py-20 '>
            <ButtonTitle title="Tech Talk & Tips 🧩" />
               <InnovationDesign/>
               <InnovationList/>
        </div>
    );
};

export default Innovation;