import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsedValue, setCollapsedValue] = useState(true)
    let [on, setOn] = useState(false)

    const collapseAccordion = () => {setCollapsedValue(!collapsedValue)}
    const onClick = () => setCollapsedValue(!collapsedValue)
    return (
        <div>
             <OnOff value={on} onClick={setOn}/>
            <UncontrolledOnOff/>
            {/*<PageTitle title={'This is app component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            <Accordion titleValue={'Menu'}
                       collapsed={collapsedValue}
                       onChange={collapseAccordion}
                       onClick={onClick}
                       items={[]}/>
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <UncontrolledAccordion titleValue={'menu'}/>
            <UncontrolledRating/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
