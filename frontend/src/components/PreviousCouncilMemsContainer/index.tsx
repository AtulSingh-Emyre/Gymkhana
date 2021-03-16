import React, { useState } from 'react';
import PreviousCouncilMems from '../PreviousCouncilMems';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SiClockify } from "react-icons/si";
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import { BiChevronsDown } from 'react-icons/bi';
import { CSSTransition } from 'react-transition-group';
import HorizontalTimelineCustom from "../HorizontalTImelineCustom/index";

const data = [
    {
        year: '2020 - 2021',
        time: '2020',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2019 - 2020',
        time: '2019',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2018 - 2019',
        time: '2018',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
    },
    {
        year: '2017 - 2018',
        time:'2017',
        gsCult: "Sonu Sourav",
        gsHos: "Sonu Sourav",
        gsTech: "Sonu Sourav",
        gsSports: "Sonu Sourav",
        gsMess: "Sonu Sourav",
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

            <h2 style={{textAlign:'center', color:'blue', paddingBottom:'5%'}}> <strong>Previous Office Bearers</strong></h2>
            <HorizontalTimelineCustom setIndex={setIndex} values={values} />
            <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'  >
            <PreviousCouncilMems user={data[value]}/>
            </CSSTransition>
                        
            
{/*             
            <VerticalTimeline >
            {
                data.map(council => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element"
                            contentStyle={{ background: '#FFD54F', color: 'black', padding:0 }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            // date={council.year}
                            iconStyle={{backgroundColor:'#bf360c', alignSelf:'center'}}
                            icon = {<SiClockify color={'white'}/>}
                            >   
                                <CSSTransition in={true} appear={true} timeout={1000} classNames='fade'  >
                                    <PreviousCouncilMems user={council}/>
                                </CSSTransition>
                        </VerticalTimelineElement>
                )
                })
            }            
            </VerticalTimeline> */}
        </div>
    );
}

export default PreviousCouncilMemsContainer;


const container: React.CSSProperties = {
    width:'100%',
    padding:'5%',
    alignItems:'center',
    alignSelf:'center',
    // backgroundColor: '#E65100'
}