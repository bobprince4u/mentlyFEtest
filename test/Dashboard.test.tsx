import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../components/Dashboard';

jest.mock('../components/ProgramsSection', () => {
  const MockProgramsSection = () => <div data-testid="programs-section" />;
  MockProgramsSection.displayName = 'MockProgramsSection';
  return MockProgramsSection;
});
jest.mock('../components/GroupCallsSection', () => {
  const MockGroupCallsSection = () => <div data-testid="group-calls-section" />;
  MockGroupCallsSection.displayName = 'MockGroupCallsSection';
  return MockGroupCallsSection;
});
jest.mock('../components/ApplicationsSection', () => {
  const MockApplicationsSection = () => <div data-testid="applications-section" />;
  MockApplicationsSection.displayName = 'MockApplicationsSection';
  return MockApplicationsSection;
});
jest.mock('../components/MentorsSection', () => {
  const MockMentorsSection = () => <div data-testid="mentors-section" />;
  MockMentorsSection.displayName = 'MockMentorsSection';
  return MockMentorsSection;
});
jest.mock('../components/UsersSection', () => {
  const MockUsersSection = () => <div data-testid="users-section" />;
  MockUsersSection.displayName = 'MockUsersSection';
  return MockUsersSection;
});
jest.mock('../components/RecentActivitiesSection', () => {
  const MockRecentActivitiesSection = () => <div data-testid="recent-activities-section" />;
  MockRecentActivitiesSection.displayName = 'MockRecentActivitiesSection';
  return MockRecentActivitiesSection;
});

describe('Dashboard Component', () => {
  it('renders welcome section with user name', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Welcome Peter Jonathan-Hart/i)).toBeInTheDocument();
  });

  it('renders all section components', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('programs-section')).toBeInTheDocument();
    expect(screen.getByTestId('group-calls-section')).toBeInTheDocument();
    expect(screen.getByTestId('applications-section')).toBeInTheDocument();
    expect(screen.getByTestId('mentors-section')).toBeInTheDocument();
    expect(screen.getByTestId('users-section')).toBeInTheDocument();
    expect(screen.getByTestId('recent-activities-section')).toBeInTheDocument();
  });

  it('displays the profile section', () => {
    render(<Dashboard />);
    expect(screen.getByText('Timothy Baba')).toBeInTheDocument();
    expect(screen.getByText('View Profile')).toBeInTheDocument();
  });
});