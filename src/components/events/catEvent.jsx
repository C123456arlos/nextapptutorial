import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CatEvent = ({ data, pageName }) => {
    return (<>
        <div className='cat_events'>
            <h1>events in {pageName}</h1>
            <div className='content'>
                {data?.map(ev => (
                    <Link legacyBehavior key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                        <a className='card'>
                            <Image width={300} height={200} alt={ev.title} src={ev.image}></Image>
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </>
    )
}
export default CatEvent
