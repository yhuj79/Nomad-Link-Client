import React from 'react';
import RecruitState from '../components/commons/RecruitState';
import RecruitSummary from '../components/units/RecruitSummary';

function PageRecruit() {
    return (
        <div>
            <RecruitSummary />
            <RecruitState />
        </div>
    );
}

export default PageRecruit;