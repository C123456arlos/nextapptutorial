import Image from 'next/image'
import Link from 'next/link'
import AllEvents from '../../src/components/events/events-page'
const EventsPage = ({ data }) => {
    return (
        <AllEvents data={data}></AllEvents>
    )
}
export default EventsPage
export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json')
    return {
        props: {
            data: events_categories
        }
    }
}