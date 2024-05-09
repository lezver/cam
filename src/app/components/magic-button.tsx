'use client';

import React, { useEffect, useState } from 'react';
import Button, { IButtonProps } from './button';

export default function MagicButton(props: IButtonProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count > 2) throw new Error('Unexpected ERROR');
  }, [count]);

  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Magic Button
    </Button>
  );
}
