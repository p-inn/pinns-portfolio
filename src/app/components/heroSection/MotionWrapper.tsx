'use client';

import { useState } from 'react';
import FirstLayout from './FirstLayout';

export default function MotionWrapper() {
  const [showMotion, setShowMotion] = useState(true);

  return (
    <>
      {showMotion && <FirstLayout onFinish={() => setShowMotion(false)} />}
    </>
  );
}
