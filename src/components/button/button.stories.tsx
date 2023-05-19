import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.component";
import { IconCircle } from "@tabler/icons-react";

export default {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const argTypes: Story["argTypes"] = {
  //    loading: {
  //      control: "boolean",
  //    },
  variant: {
    control: "radio",
    options: ["primary", "secondary", "tertiary", "text"],
  },
  //    fullWidth: {
  //      control: "boolean",
  //    },
  //    size: {
  //      control: "radio",
  //      options: ["xs", "sm", "md", "lg", "xl"],
  //    },
  destructive: {
    control: "boolean",
  },
  //    className: {
  //      control: "text",
  //    },
  component: {
    table: {
      disable: true,
    },
  },
};

export const Primary: Story = {
  render: (props) => (
    <div className="flex items-center space-x-4">
      <Button {...props}>Button</Button>
      <Button {...props} disabled>
        Disabled
      </Button>
      <Button {...props} loading>
        Loading
      </Button>
      <Button
        {...props}
        leftIcon={<IconCircle className="h-4 w-4" />}
        rightIcon={<IconCircle className="h-4 w-4" />}
      >
        Icons
      </Button>
    </div>
  ),
  args: {
    variant: "primary",
  },
  argTypes,
};

export const Secondary: Story = {
  render: (props) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Button {...props}>Button</Button>
        <Button {...props} disabled>
          Disabled
        </Button>
        <Button {...props} loading>
          Loading
        </Button>
        <Button
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="md" {...props}>
          Button
        </Button>
        <Button size="md" {...props} disabled>
          Disabled
        </Button>
        <Button size="md" {...props} loading>
          Loading
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="lg" {...props}>
          Button
        </Button>
        <Button size="lg" {...props} disabled>
          Disabled
        </Button>
        <Button size="lg" {...props} loading>
          Loading
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="xl" {...props}>
          Button
        </Button>
        <Button size="xl" {...props} disabled>
          Disabled
        </Button>
        <Button size="xl" {...props} loading>
          Loading
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  ),
  args: {
    variant: "secondary",
  },
  argTypes,
};

export const Tertiary: Story = {
  render: (props) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Button {...props}>Button</Button>
        <Button {...props} disabled>
          Disabled
        </Button>
        <Button {...props} loading>
          Loading
        </Button>
        <Button
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="md" {...props}>
          Button
        </Button>
        <Button size="md" {...props} disabled>
          Disabled
        </Button>
        <Button size="md" {...props} loading>
          Loading
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="lg" {...props}>
          Button
        </Button>
        <Button size="lg" {...props} disabled>
          Disabled
        </Button>
        <Button size="lg" {...props} loading>
          Loading
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="xl" {...props}>
          Button
        </Button>
        <Button size="xl" {...props} disabled>
          Disabled
        </Button>
        <Button size="xl" {...props} loading>
          Loading
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  ),
  args: {
    variant: "tertiary",
  },
  argTypes,
};

export const Text: Story = {
  render: (props) => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4">
        <Button {...props}>Button</Button>
        <Button {...props} disabled>
          Disabled
        </Button>
        <Button {...props} loading>
          Loading
        </Button>
        <Button
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="md" {...props}>
          Button
        </Button>
        <Button size="md" {...props} disabled>
          Disabled
        </Button>
        <Button size="md" {...props} loading>
          Loading
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="md"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="lg" {...props}>
          Button
        </Button>
        <Button size="lg" {...props} disabled>
          Disabled
        </Button>
        <Button size="lg" {...props} loading>
          Loading
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="lg"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button size="xl" {...props}>
          Button
        </Button>
        <Button size="xl" {...props} disabled>
          Disabled
        </Button>
        <Button size="xl" {...props} loading>
          Loading
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<IconCircle className="h-4 w-4" />}
          rightIcon={<IconCircle className="h-4 w-4" />}
        >
          Icons
        </Button>
        <Button
          size="xl"
          {...props}
          leftIcon={<img className="h-4 w-4" src="/icons/google.svg" />}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  ),
  args: {
    variant: "text",
  },
  argTypes,
};
