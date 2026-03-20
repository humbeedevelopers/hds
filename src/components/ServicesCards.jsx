import RevealCards from '@/Animations/RevealCards'
import React from 'react'

const ServicesCards = ({ data = [] }) => {
    if (!data.length) return null;

    // const cardData = [
    //     {
    //         id : 1,
    //         title : "Service 1",
    //         description : "We’re not just  numbers—we’re a supportive team and passionate people who love web,"
    //     },
    //     {
    //         id : 2,
    //         title : "Service 1",
    //         description : "We’re not just  numbers—we’re a supportive team and passionate people who love web,"
    //     },
    //     {
    //         id : 3,
    //         title : "Service 1",
    //         description : "We’re not just  numbers—we’re a supportive team and passionate people who love web,"
    //     },
    // ]
    return (
        <RevealCards className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 py-5'>
            {data.map((card) => (
                <div key={card.id} className='bg-card-bg/80 w-full sm:w-3/4 lg:w-full flex flex-col gap-24 py-6 px-4'>
                    <h3 className='text-3xl md:text-4xl font-montserrat leading-snug'>{card.title}</h3>
                    <p className='text-sm md:text-md leading-tight text-text-muted'>{card.description}</p>
                </div>
            ))}
        </RevealCards>
    )
}

export default ServicesCards