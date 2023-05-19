import AboutRocket from '@/containers/AboutRocket';
import AboutTraining from '@/containers/AboutTraining';
import Case from '@/containers/Case';
import Organizer from '@/containers/Organizer';
import Question from '@/containers/Question';

export default function home() {
  return (
    <>
      <AboutRocket />
      <Case />
      <AboutTraining />
      <Question />
      <Organizer />
    </>
  );
}
