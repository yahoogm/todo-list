import { Task } from '@/components/organisms';
import { HeaderAndFooter } from '@/components/templates';

export const metadata = {
  title: 'Todo Task',
};

const TaskPage = () => {
  return (
    <HeaderAndFooter>
      <Task />
    </HeaderAndFooter>
  );
};

export default TaskPage;
