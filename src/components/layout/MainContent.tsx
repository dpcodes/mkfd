import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContent({ children }: Props) {
  return (
    <div className="mx-auto flex-1 border-b">
      <div className="max-w-7xl">
        <main className="py-10">{children}</main>
      </div>
    </div>
  );
}
