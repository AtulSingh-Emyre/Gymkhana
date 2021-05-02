import React from 'react'
import HostelHeader from '../../HostelCouncilComponents/HostelHeader';
import HostelIntro from '../../HostelCouncilComponents/HostelIntro';
import HostelFooter from '../../HostelCouncilComponents/HostelFooter';
import HostelBody from '../../HostelCouncilComponents/HostelBody';

function HostelCouncil() {
    return (<>
        <HostelHeader/>
        <HostelIntro/>
        <HostelBody/>
        <HostelFooter/>
    </>)
}

export default HostelCouncil;