"use client";

import { useEffect, useState } from "react";

/** True after the component mounts on the client. Use to defer layout that differs by viewport. */
export function useHasMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
