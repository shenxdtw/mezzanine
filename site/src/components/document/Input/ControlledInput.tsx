import React, { useState } from 'react';
import { Input } from '@mezzanine-ui/react';

export default function ControlledInput() {
  const [value, setValue] = useState('Value');

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="type something"
    />
  );
}
