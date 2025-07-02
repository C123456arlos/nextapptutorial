import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AllEvents = ({ data }) => {
    return (
        <div>
            <h1>events page</h1>
            <div className='events_page'>
                {data?.map(ev => (
                    <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
                        <a className='card'><Image src={ev.image} alt={ev.title} width={300} height={400}></Image>
                            <h2>{ev.title}</h2></a></Link>
                ))}
            </div>
        </div>
    )
}

export default AllEvents