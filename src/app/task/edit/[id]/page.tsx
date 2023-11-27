import { EditTask } from '@/components/organisms';

const EditPage = ({ params }: { params: { id: string } }) => {
  return <EditTask id={params.id} />;
};

export default EditPage;
