import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #5eead4 0%, #818cf8 100%);
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const Hero = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const CTA = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  background: #fff;
  color: #4f46e5;
  border: none;
  border-radius: 2rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: background 0.2s;
  &:hover {
    background: #e0e7ff;
  }
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 3rem 0;
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.8);
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  padding: 2rem;
  width: 250px;
  text-align: left;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        <Logo>EventFlow</Logo>
        <CTA onClick={() => navigate('/dashboard')}>Go to Dashboard</CTA>
      </Nav>
      <Hero>
        <Title>Plan Your Perfect Event</Title>
        <Subtitle>
          Weddings, birthdays, parties – all-in-one seamless planning.<br />
          Choose themes, venues, food menus, decor, and more.
        </Subtitle>
        <CTA onClick={() => navigate('/dashboard')}>Get Started</CTA>
      </Hero>
      <Features>
        <FeatureCard>
          <h3>Venue & Decor</h3>
          <p>Browse stunning venues. Pick from curated decor themes and styles.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Food Menus</h3>
          <p>Select from our chef-crafted menus. Dietary options available.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Photography</h3>
          <p>Style your memories. Choose from classic, candid, or cinematic themes.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Invitations</h3>
          <p>Design digital or print invitations matching your event style.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Smart Packages</h3>
          <p>Set your budget. Instantly get custom, affordable packages.</p>
        </FeatureCard>
      </Features>
    </Container>
  );
};

export default LandingPage;
