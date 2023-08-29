import React , {useEffect} from 'react'
import Banner from '../Component/Partial/Event Booking Component/Banner'
import VideoBanner from '../Component/Partial/Event Booking Component/Video-Banner'
import LinkSection from '../Component/Partial/LinkSection'

const EventBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='event-booking-container'>
        <LinkSection />
        <Banner />
        <VideoBanner />
        <div className='mt-5'></div>
    </div>
  )
}

export default EventBooking