// patient_app.js
import React, { useState, useEffect } from 'react';

import './patient_app.css';

import displayImg from '../images/patient-image.png';

import qrIcon from '../images/icons/qr-icon.png';
import recomendationIcon from '../images/icons/recomendation-icon.svg';


function PatientApp() {
  return (
    <div className='patient-app'>
        <AboutMePanel />
        <WidgetsPanel />
    
    </div>
  );
}

function AboutMePanel() {
    return (
        <div id='aboutme-panel'>
            <div id='aboutme-box'>
                <div id='my-intro-box'>
                    {<img id='display-img' src={displayImg} alt='Akash Patel'></img>
                    }
                    <h1 id='my-name'>Akash Patel</h1>
                    <p id='aboutme'>
                        Blood Group: B+
                        <br></br>
                        Address: Newtown, Kolkata, 700001
                        <br></br>
                        Contact Number: 9999900000
                    </p>
                </div>
            </div>
        </div> 
    )
}

function redirectTo(link){window.location.href = link;}

function NavLink(props){
    return(
        <div className='nav-link' onClick={()=>redirectTo(props.link)}>{props.widgetTitle}</div>

    )
}

function SmallWidget(props){
    const style = {
        gridColumn: `${props.startPosition}/span 1`,
        backgroundColor: props.color,
    }
    return(
        <div onClick={()=>redirectTo(props.link)} className='small-grid-item' id={props.id} style={style} >
            <div className='widget-icon-container'>
            <img className='widget-icon' src={props.src} alt='widget icon'></img>
            </div>
            <p className='widget-title'>{props.widgetTitle}</p>
            <p className='widget-userid'>{props.userId}</p>
        </div>
    )
}


function DisplayGrid(props) {
    return (
        <div id='widget-grid'>
            {
                Object.keys(props.widgets).map((widgetKey) => {
                    const widget = props.widgets[widgetKey];
                    let position = widget.position;
                    let size = widget.size;
                    if (props.windowWidth < 1300) {
                        position = widget.mPosition;
                        size = widget.mSize
                    }
                    if (size === "small") {
                        return (
                            <SmallWidget
                                key={widget.title}
                                link={widget.link}
                                startPosition={position}
                                color={widget.color}
                                src={widget.icon}
                                widgetTitle={widget.title}
                                userId={widget.userId} />
                        );
                    } 
                    return (null);
                }
                )}
        </div>
    )
}

function WidgetsPanel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    return (
        <div id='widgets-panel'>
            <div style={{ height: "50px" }}></div>
            <p id='widget-panel-heading'>Widgets ✨</p>
            <DisplayGrid widgets={widgets} windowWidth={windowWidth} />
        </div>
    )
}

let widgets = {
    twitter: {
        size: "small",
        mSize: "small",
        position: 1,
        mPosition: 1,
        color: "#E9F4FC",
        link: "http://localhost:3000/verify-appointment/",
        icon: qrIcon,
        title: "Verify Appointment",
    },
    linkedin: {
        size: "small",
        mSize: "small",
        position: 2,
        mPosition: 2,
        color: "#ffffff",
        link: "https://health.sudip.me/recomendations/",
        icon: recomendationIcon,
        title: "Recomendations",
    },
}

export default PatientApp;
