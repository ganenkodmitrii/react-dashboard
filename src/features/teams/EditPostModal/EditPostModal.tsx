import { Button, Modal, Space, Input, Form, useForm } from '@ebs-integrator/react-ebs-ui';
import { useMutation, useQueryClient } from 'react-query';
import { TableProps } from '../TeamsPage';
import { table } from '../../../api/services/firstAPI';

interface ModalProps {
  edit?: TableProps;
  onClose: () => void;
}

const EditPostModal: React.FC<ModalProps> = ({ edit, onClose }) => {
  const [form] = useForm();
  const queryClient = useQueryClient();

  const addItem = useMutation<unknown, unknown, TableProps>(data => table.postItem(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('repoData');
      onClose();
    },
  });

  const updateItem = useMutation<unknown, unknown, TableProps>(data => table.putItem(data), {
    onSuccess: () => {
      queryClient.invalidateQueries('repoData');
      onClose();
    },
  });

  const onSubmit = (data: TableProps) => {
    if (edit?.id) {
      updateItem.mutate({ ...edit, ...data });
      console.log(table.putItem);
      console.log(edit);
    } else {
      addItem.mutate(data);
      console.log(table.postItem);
      console.log(edit);
    }
  };
  return (
    <Modal onClose={onClose} title="Confirmă acceptare">
      <Modal.Content>
        <Form form={form} type="horizontal" initialValues={edit} onFinish={onSubmit}>
          <Form.Field name="name" label="Name Surname">
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
export default EditPostModal;
