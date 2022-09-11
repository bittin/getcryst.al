import { FC, ReactNode } from "react";

const DocWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <>
    <article className="prose dark:prose-invert w-2/3">
      {children}
    </article>
  </>;
};

export default DocWrapper;