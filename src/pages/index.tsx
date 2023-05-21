import AboutRocket from '@/containers/AboutRocket';
import AboutTraining from '@/containers/AboutTraining';
import Case from '@/containers/Case';
import Organizer from '@/containers/Organizer';
import Question from '@/containers/Question';
import CustomHead from '@/components/CustomHead';

export default function home() {
  return (
    <>
      <CustomHead />
      <AboutRocket />
      <Case />
      <AboutTraining />
      <Question />
      <Organizer />
    </>
  );
}
