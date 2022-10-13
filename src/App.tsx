import * as React from "react";
import Heading from "./components/Heading";
import Logo from "./components/Logo";
import Text from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import "./styles/global.css";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center h-">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Login to start using
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold ">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Input email address here..."
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold ">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remeber me for more 30 dayss
          </Text>
        </label>

        <Button type="submit" className="mt-4 ">
          Enter plataform
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          size="sm"
          asChild
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Forgot you password?</a>
        </Text>
        <Text
          size="sm"
          asChild
          className="text-gray-400 underline hover:text-gray-200"
        >
          <a href="#">Don't have an account? Create one now!</a>
        </Text>
      </footer>
    </div>
  );
}
