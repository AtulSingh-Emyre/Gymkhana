import React, { useState } from 'react';
import PreviousCouncilMems from '../PreviousCouncilMems';
import 'react-vertical-timeline-component/style.min.css';
import { CSSTransition } from 'react-transition-group';
import HorizontalTimelineCustom from "../HorizontalTImelineCustom/index";

const data = [
    {
        year: '2016 - 2017',
        time:'2016',
        gsCult: "Ashutosh Agarwal",
        gsHos: "Chitransh Singh",
        gsTech: "Samved Desai",
        gsSports: "Nikhilesh Kumar Thakur",
        gsAcad: "Deepak Goli Satya"
    },{
        year: '2017 - 2018',
        time:'2017',
        gsCult: "Kartik Kataria",
        gsHos: "Chitransh Singh",
        gsTech: "Samved Desai",
        gsSports: "Nikhilesh Kumar Thakur",
        
    },{
        year: '2018 - 2019',
        time: '2018',
        gsCult: "Mehul Bose",
        gsHos: "Ashrith Adepu",
        gsTech: "Samved Desai",
        gsSports: "Nikhilesh Kumar Thakur",
        gsMess: "MD Rizwan Ansari,Sushma Biradar,Praveen Kumar",
        gsAcad: "Shruti Patel"
    },{
        year: '2019 - 2020',
        time: '2019',
        gsCult: "Mehul Bose",
        gsHos: "Soma Siddhartha",
        gsTech: "Sonu Sourav",
        gsSports: "Abhay Sahu",
        gsMess: "Yogesh Kumar",
        gsAcad: "Adhokshaja Madhwaraj"
    }, {
        year: '2021 - 2022',
        time: '2021',
        gsCult: "Gowri Y Subedar",
        gsHos: "Durga Naga Sai Rahul M",
        gsTech: "Atul Singh",
        gsSports: "Yogesh Dhyani",
        gsMess: "Savsaviya Brinal Sureshbhai",
        gsAcad: "Mummaneni Sai Harsha"
    },
    
    
]
const values = data.map(info => info.time);

const PreviousCouncilMemsContainer = () => {
    const [Hover, setHover] = useState(false);
    const [value, setvalue] = useState(0);
    const [previous, setprevious] = useState(0);
    const setIndex = (index : any) => {
        console.log('data',index);
        
        setprevious(value);
        setvalue(index);
    }

    return (
        <div style={container}>
            <h2 style={{textAlign:'center', color:'blue', paddingBottom:'5%', margin:'auto'}}> <strong>SECRETARIES TIMELINE</strong></h2>
            <HorizontalTimelineCustom setIndex={setIndex} values={values} />
            <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'  >
            <PreviousCouncilMems user={data[value]}/>
            </CSSTransition>
        </div>
    );
}

export default PreviousCouncilMemsContainer;


const container: React.CSSProperties = {
    width:'100%',
    padding:'5%',
    alignItems:'center',
    alignSelf:'center',
}