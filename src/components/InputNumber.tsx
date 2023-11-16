import React from 'react';
import { NumericFormat } from 'react-number-format';

const InputNumber = React.forwardRef(({ onChange, ...props }: any, ref) => (
  <NumericFormat
    getInputRef={ref}
    allowNegative={false}
    thousandSeparator=','
    decimalScale={0}
    onValueChange={({ floatValue }) => {
      onChange({ target: { value: floatValue } });
    }}
    {...props}
  />
));

export default InputNumber;
