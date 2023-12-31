import { EditTask } from '@/components/organisms';

export const metadata = {
  title: 'Edit Todo',
};

const EditTaskPage = ({ params }: { params: { id: string } }) => {
  return <EditTask id={params.id} />;
};

export default EditTaskPage;
