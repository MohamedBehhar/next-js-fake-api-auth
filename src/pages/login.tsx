import { NextPage } from "next";
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
	<div className="h-3/6 flex  justify-end items-center flex-col ">
		<h1 className="text-center text-teal-900 text-3xl font-bold p-10">Login</h1>
    <div
      className=" flex  justify-center items-center 
  "
    >
      <form action=""  className="login-card card bg-slate-200 p-5 rounded-lg shadow-lg border  h-fit w-fit flex flex-col gap-10">
        <Input size="sm" label="First Name" placeholder="Guillermo Rauch" />

        <Input label="Full Name" type="email" placeholder="Guillermo Rauch" />
		<Button type="submit" color="primary" className="bg-teal-800" auto>
			Login
        </Button>
      </form>
    </div>
	<div className="regester text-center">
		<p>
			Don't have an account?
		</p>
		<p>Register</p>
	</div>
	</div>
  );
};

export default Login;
