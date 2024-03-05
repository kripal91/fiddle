import React, { useState, useEffect } from 'react';
import './EventsPage.css';
import { collection, getDocs, where, query, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from './firebase';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Import the delete icon
import { useNavigate } from 'react-router-dom';
import EventDetailsPage from './EventDetailsPage';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [deleteEventId, setDeleteEventId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const userId = auth.currentUser.uid; 
          const eventsQuery = query(collection(db, 'events'));
          const querySnapshot = await getDocs(eventsQuery);

          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setEventsData(data);
        }
      } catch (error) {
        console.error('Error fetching events data: ', error);
      }
    };

    fetchData();
  }, [deleteEventId]); 

  const handleEventCardClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  const handlePlusClick = () => {
    navigate('/EventsListingForm');
  };

  const handleDeleteIconClick = async (eventId) => {
    try {
      const eventRef = doc(db, 'events', eventId);
      await deleteDoc(eventRef);
      setDeleteEventId(eventId); // Trigger re-fetch after deletion
    } catch (error) {
      console.error('Error deleting event: ', error);
    }
  };

  return (
    <div className="events-page">
      <h1 className='page-header'>| Events</h1>
      <div className="event-cards">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleEventCardClick(event.id)}
          >
            {/* <div className="delete-icon" onClick={() => handleDeleteIconClick(event.id)}>
              <FaTrash />
            </div> */}
            <img src={event.previewImageUrl} alt="Event Preview" />
            <h2>{event.eventName}</h2>
            

            <div className='registration-dateTime'>
            <div className="registration-icon">
              {/* <h3>{event.registrations}</h3> */}
              <p>{event.eventDate}</p>
            {/* <p>Time: {event.registrationDate}</p> */}
            
            </div>
            </div>

            
          </div>
        ))}
      </div>
      
      {selectedEventId && (
        <EventDetailsPage
          eventId={selectedEventId}
          onClose={() => setSelectedEventId(null)}
        />
      )}


      <div className='spacer'>©️RowX 2024
      <p>Privacy Policy • Terms of Use • Report</p></div>
    </div>
  );
};

export default EventsPage;
