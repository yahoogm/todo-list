import { DetailTask } from '@/components/organisms';

export const metadata = {
  title: 'Detail todo',
};

const DetailTaskPage = ({ params }: { params: { id: string } }) => {
  return <DetailTask id={params.id} />;
};

export default DetailTaskPage;
