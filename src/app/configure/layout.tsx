import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 min-h-[80vh]  flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
