import React from 'react';
import Button  from "@/components/ui/Button"; // Ensure the casing matches the actual file name

export function ButtonDemo() {
  return <Button>Button</Button>;
}

const ButtonPage: React.FC = () => {
  return (
    <div>
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </div>
  );
};

export default ButtonPage;