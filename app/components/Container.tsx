"use client";

// Interface for Container component
interface ContainerProps {
  children: React.ReactNode;
}

// Container component
// This component takes in children as props and returns a div containing the children
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            "
    >
      {children}
    </div>
  );
};

export default Container;
