import React from 'react';

import ExperienceDetail from './ExperienceDetail';

const ExperienceContent = ({data}) => {
    function repeatForLanguages() {
        const temp = [];
        for (let index = 0; index < data.languages.length; index++) {
            let language = data.languages[index];
            let type = data.type[index];
            if (language !== '' && type !== '') {
                temp.push(<ExperienceDetail key={index} language={language} type={type}/>);    
            }
        }
        if (temp != null) {
            return temp;
        }
    }

    return (
        <div className='experience_content'>
            {repeatForLanguages()}
        </div>
    )
}

export default ExperienceContent
