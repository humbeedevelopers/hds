import RevealCards from '@/Animations/RevealCards';
import WordReveal from '@/Animations/WordReveal';
import React from 'react'

const ServiceBenifits = ({data}) => {
    // const benefitsData = [
    //     {
    //         id: 1,
    //         title: "Benefit 1",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse. Error totam fugit cumque, quaerat natus corrupti?"
    //     },
    //     {
    //         id: 2,
    //         title: "Benefit 2",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse."
    //     },
    //     {
    //         id: 3,
    //         title: "Benefit 3",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse."
    //     },
    //     {
    //         id: 4,
    //         title: "Benefit 4",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse."
    //     },
    //     {
    //         id: 5,
    //         title: "Benefit 5",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse."
    //     },
    //     {
    //         id: 6,
    //         title: "Benefit 6",
    //         highlight: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    //         description: "Ducimus pariatur ipsa provident, vero sunt ad magnam eveniet esse."
    //     }
    //     ];
     const benefitsGroup = data?.benefits_section || {};

    // Dynamic parser (NO LIMIT)
    const benefitsData = [];

    let index = 1;

    while (benefitsGroup[`benefit_${index}_title`]) {
        benefitsData.push({
            id: index,
            title: benefitsGroup[`benefit_${index}_title`],
            highlight: benefitsGroup[`benefit_${index}_highlight`],
            description: benefitsGroup[`benefit_${index}_description`],
        });
        index++;
    }    
    return (
            <section className='py-6 md:py-20 flex flex-col gap-12'>
                <h2 className='font-instrument text-5xl md:text-7xl leading-tight'>
                    <WordReveal>
                    "Service" benifits
                    </WordReveal>
                </h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16'>
                        {benefitsData.map((benifit) => (
                            <RevealCards key={benifit.id} className='flex flex-col font-montserrat gap-5'>
                                <h4 className='md:text-4xl text-2xl'>{benifit.title}</h4>
                                <p className='md:w-4/5 w-full text-sm md:text-md'>
                                <span className='text-primary'>{benifit.highlight}</span> 
                                {benifit.description}
                                </p>
                            </RevealCards>
                        ))}
                </div>
            </section>
        )
    }

export default ServiceBenifits