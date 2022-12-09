import { Form, Input, Typography } from "antd";
import { Controller } from "react-hook-form";
import style from "./style";

const { Text } = Typography;

function InputUseForm({name, rules, control, error, ...res}) {

  return (
    <Form.Item>
      <Controller
        rules={rules}
        name={name}
        render={({ field }) => <Input status={error ? 'error' : ""} {...field} {...res} style={style.input} />}
        control={control}
      />
    </Form.Item>
  )
}

export default InputUseForm;