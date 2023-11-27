import { EditTask } from '@/components/organisms';

const EditTaskPage = ({ params }: { params: { id: string } }) => {
  return <EditTask id={params.id} />;
};

export default EditTaskPage;
