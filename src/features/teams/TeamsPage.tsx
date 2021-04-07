import { useState } from 'react';
import { table } from '../../api/services/firstAPI';
import Layout from '../../components/Layout/Layout';
import { Table, Button, Actions, Space } from '@ebs-integrator/react-ebs-ui';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import type { ColumnType } from '@ebs-integrator/react-ebs-ui/dist/components/organisms/Table/Table';
import EditPostModal from './EditPostModal/EditPostModal';

export interface TableProps {
  id?: string;
  createdAt?: string;
  name: string;
  profession: string;
  page?: string;
}

const item: TableProps = {
  name: '',
  profession: '',
};

const TeamsPage = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [edit, setEdit] = useState<TableProps | undefined>();

  const { data } = useQuery<TableProps[]>(['repoData', page], () => table.getList(page));

  const deleteItem = useMutation((id: string) => table.deleteItem(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('repoData');
    },
  });

  const columns: ColumnType<TableProps>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Profession',
      dataIndex: 'profession',
    },
    {
      title: '',
      render: props => (
        <Actions showTitle={false} placement="right">
          <Actions.Item
            onClick={() => {
              setEdit(props);
            }}
          >
            Edit
          </Actions.Item>
          <Actions.Item
            onClick={() => {
              deleteItem.mutate(props.id);
            }}
          >
            Delete
          </Actions.Item>
        </Actions>
      ),
    },
  ];

  const onClickNext = () => {
    setPage(page + 1);
  };

  const onClickPrev = () => {
    setPage(page - 1);
  };

  const onClose = () => setEdit(undefined);

  return (
    <Layout>
      <Space className="mb-20" justify="end">
        <Button
          onClick={() => {
            setEdit(item);
          }}
        >
          Create
        </Button>
      </Space>
      <Table columns={columns} data={data} />
      <Space className="mt-20" justify="space-between">
        <Space className="ml-5">Page number: {page}</Space>
        <Space>
          <Button onClick={() => onClickPrev()} disabled={page === 1 ? true : false}>
            Previous Page
          </Button>
          <Button onClick={() => onClickNext()}>Next Page</Button>
        </Space>
      </Space>
      {!!edit && <EditPostModal edit={edit} onClose={onClose} />}
    </Layout>
  );
};
export default TeamsPage;
