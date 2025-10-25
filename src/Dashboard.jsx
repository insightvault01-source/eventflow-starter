import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background: #f3f4f6;
`;

const Sidebar = styled.aside`
  width: 220px;
  background: linear-gradient(120deg, #5eead4 0%, #818cf8 100%);
  color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavItem = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: rgba(255,255,255,0.12);
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const WelcomeBanner = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  font-size: 1.4rem;
  color: #4f46e5;
  font-weight: 700;
`;

const EventsRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const EventCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1.5rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Dashboard = () => (
  <Container>
    <Sidebar>
      <div style={{fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem'}}>EventFlow</div>
      <NavItem>My Events</NavItem>
      <NavItem>New Event</NavItem>
      <NavItem>Food Menu</NavItem>
      <NavItem>Venue & Decor</NavItem>
      <NavItem>Photography</NavItem>
      <NavItem>Invitations</NavItem>
      <NavItem>Packages</NavItem>
    </Sidebar>
    <Main>
      <WelcomeBanner>
        Welcome back! <br />
        Start planning your next unforgettable event.
      </WelcomeBanner>
      <EventsRow>
        <EventCard>
          <div style={{fontWeight: 'bold'}}>Wedding</div>
          <div>Date: 2025-12-18</div>
          <div>Venue: Grand Hall</div>
          <div>Status: Planning</div>
        </EventCard>
        <EventCard>
          <div style={{fontWeight: 'bold'}}>Birthday Party</div>
          <div>Date: 2026-01-08</div>
          <div>Venue: Sky Lounge</div>
          <div>Status: Confirmed</div>
        </EventCard>
        <EventCard>
          <div style={{fontWeight: 'bold'}}>Bachelor Party</div>
          <div>Date: 2025-11-22</div>
          <div>Venue: Club Neon</div>
          <div>Status: Inquiry</div>
        </EventCard>
      </EventsRow>
    </Main>
  </Container>
);

export default Dashboard;
