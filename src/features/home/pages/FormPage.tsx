import { FormRepeaterProvider } from '../../../context/FormRepeaterContext';
import FormRepeater from '../FormRepeater/FormRepeater';

const FormPage = () => {
  return (
    <FormRepeaterProvider>
      <FormRepeater />
    </FormRepeaterProvider>
  );
};
export default FormPage;
