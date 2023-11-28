import { Task } from '@/components/organisms';
import { HeaderAndFooter } from '@/components/templates';

export const metadata = {
  title: 'Task todo',
};

const TaskPage = () => {
  return (
    <HeaderAndFooter>
      <Task />
    </HeaderAndFooter>
  );
};

export default TaskPage;
