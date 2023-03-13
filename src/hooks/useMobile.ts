import {size} from '@dathaplus/storybook';
import { useEffect, useState } from "react";

export const useMobile = (mobileWidth = size.tabletL) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const isMobile = () => {
      if (window.innerWidth < mobileWidth) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    isMobile();

    window.addEventListener("resize", isMobile);

    return () => {
      window.removeEventListener("resize", isMobile);
    };
  });

  return { mobile };
};

export default useMobile;
