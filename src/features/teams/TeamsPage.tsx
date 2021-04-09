import { useState } from 'react';
import { teams } from 'api';
import Layout from '../../components/Layout/Layout';
import { Table, Button, Actions, Space } from '@ebs-integrator/react-ebs-ui';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import type { ColumnType } from '@ebs-integrator/react-ebs-ui/dist/components/organisms/Table/Table';
import EditPostModal from './EditTeamModal/EditTeamModal';
import { TeamsProps } from 'types/teams';
import { Results } from 'types/common';
import Pagination from './Pagination/Pagination';
import useFilters from 'hooks/filters';
import { defaultFilters } from 'utils/filters';

const item: TeamsProps = {
  name: '',
  profession: '',
};

const TeamsPage = () => {
  const queryClient = useQueryClient();

  const [edit, setEdit] = useState<TeamsProps | undefined>();

  const [filters, setFilters] = useFilters({ ...defaultFilters });

  const { data } = useQuery<Results<TeamsProps>>(['teams', filters], () => teams.getList(filters));

  const deleteItem = useMutation((id: string) => teams.remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('teams');
    },
  });

  const columns: ColumnType<TeamsProps>[] = [
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
    setFilters({ page: filters.page + 1 });
  };

  const onClickPrev = () => {
    setFilters({ page: filters.page - 1 });
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
      <Table columns={columns} data={data?.items} />

      <Pagination
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        filters={filters}
        count={data?.count}
      />

      {!!edit && <EditPostModal edit={edit} onClose={onClose} />}
    </Layout>
  );
};
export default TeamsPage;
