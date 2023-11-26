import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';
import InstructorCard from './InstructorCard';

const Instructors = () => {
  return (
    <div className='py-6'>
      <Container>
        <SectionHeader
          heading={`Our Top`}
          headingSpan={'Instructors'}
          headingDescription={`Explore excellence with SkillUP's top instructors — industry leaders and experts delivering unparalleled learning experiences. Elevate your skills with the best in the field!`}
        />
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
        <InstructorCard />
      </div>
      </Container>
    </div>
  );
};

export default Instructors;
