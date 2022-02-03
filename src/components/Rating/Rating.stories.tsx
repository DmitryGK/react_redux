import React, { useState } from 'react';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={x=>x}/>
export const RatingValue1 = () => <Rating value={1} onClick={x=>x}/>
export const RatingValue2 = () => <Rating value={2} onClick={x=>x}/>
export const RatingValue3 = () => <Rating value={3} onClick={x=>x}/>
export const RatingValue4 = () => <Rating value={4} onClick={x=>x}/>
export const RatingValue5 = () => <Rating value={5} onClick={x=>x}/>
export const ChangeRating = () => {
    let [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}