import { Button, Modal, Space, Input, Form, useForm } from '@ebs-integrator/react-ebs-ui';
import { useMutation, useQueryClient } from 'react-query';
import { TeamsProps } from 'types/teams';
import { teams } from 'api';

interface ModalProps {
  edit?: TeamsProps;
  onClose: () => void;
}

const EditTeamModal: React.FC<ModalProps> = ({ edit, onClose }) => {
  const [form] = useForm();
  const queryClient = useQueryClient();

  const addItem = useMutation<unknown, unknown, TeamsProps>(data => teams.add(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('teams');
      onClose();
    },
  });

  const updateItem = useMutation<unknown, unknown, TeamsProps>(data => teams.edit(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('teams');
      onClose();
    },
  });

  const onSubmit = (data: TeamsProps) => {
    if (edit?.id) {
      updateItem.mutate({ ...edit, ...data });
    } else {
      addItem.mutate(data);
    }
  };
  return (
    <Modal onClose={onClose} title="Confirmă acceptare">
      <Modal.Content>
        <Form form={form} type="horizontal" initialValues={edit} onFinish={onSubmit}>
          <Form.Field name="name" label="Team name">
            <Input type="text" />
          </Form.Field>

          <Form.Field name="profession" label="Profession">
            <Input type="text" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Footer>
        <Space justify="space-between">
          <Button onClick={onClose}>Refuse</Button>

          <Space>
            <Button type="ghost" onClick={() => form.submit()}>
              Confirm
            </Button>
          </Space>
        </Space>
      </Modal.Footer>
    </Modal>
  );
};
export default EditTeamModal;
