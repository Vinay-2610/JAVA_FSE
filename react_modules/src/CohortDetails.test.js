import { render, screen } from '@testing-library/react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
  
  test('should create the component', () => {
    const { container } = render(<CohortDetails />);
    expect(container).toBeTruthy();
  });

  test('should initialize the props', () => {
    const cohort = CohortData[0];
    const { container } = render(
      <CohortDetails 
        cohortCode={cohort.cohortCode}
        cohortName={cohort.cohortName}
        startedOn={cohort.startedOn}
        currentStatus={cohort.currentStatus}
        coach={cohort.coach}
        trainer={cohort.trainer}
      />
    );
    
    // Verify that the component renders with the given props
    expect(screen.getByText(cohort.cohortCode)).toBeInTheDocument();
    expect(screen.getByText(cohort.cohortName)).toBeInTheDocument();
    expect(screen.getByText(cohort.startedOn)).toBeInTheDocument();
    expect(screen.getByText(cohort.currentStatus)).toBeInTheDocument();
    expect(screen.getByText(cohort.coach)).toBeInTheDocument();
    expect(screen.getByText(cohort.trainer)).toBeInTheDocument();
  });

  test('should display cohort code in h3', () => {
    const cohort = CohortData[0];
    const { container } = render(
      <CohortDetails 
        cohortCode={cohort.cohortCode}
        cohortName={cohort.cohortName}
        startedOn={cohort.startedOn}
        currentStatus={cohort.currentStatus}
        coach={cohort.coach}
        trainer={cohort.trainer}
      />
    );
    
    // Find h3 element and verify it displays the cohort code
    const h3Element = container.querySelector('h3');
    expect(h3Element).toHaveTextContent(cohort.cohortCode);
  });

  test('should always render same html', () => {
    const cohort = CohortData[0];
    const { container } = render(
      <CohortDetails 
        cohortCode={cohort.cohortCode}
        cohortName={cohort.cohortName}
        startedOn={cohort.startedOn}
        currentStatus={cohort.currentStatus}
        coach={cohort.coach}
        trainer={cohort.trainer}
      />
    );
    
    // Snapshot test
    expect(container).toMatchSnapshot();
  });

  test('should display green color for Ongoing status', () => {
    const cohort = CohortData[0]; // Ongoing status
    const { container } = render(
      <CohortDetails 
        cohortCode={cohort.cohortCode}
        cohortName={cohort.cohortName}
        startedOn={cohort.startedOn}
        currentStatus={cohort.currentStatus}
        coach={cohort.coach}
        trainer={cohort.trainer}
      />
    );
    
    const h3Element = container.querySelector('h3');
    expect(h3Element).toHaveStyle({ color: 'green' });
  });

  test('should display blue color for Completed status', () => {
    const cohort = CohortData[1]; // Completed status
    const { container } = render(
      <CohortDetails 
        cohortCode={cohort.cohortCode}
        cohortName={cohort.cohortName}
        startedOn={cohort.startedOn}
        currentStatus={cohort.currentStatus}
        coach={cohort.coach}
        trainer={cohort.trainer}
      />
    );
    
    const h3Element = container.querySelector('h3');
    expect(h3Element).toHaveStyle({ color: 'blue' });
  });

});
