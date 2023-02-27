import { NextPage } from 'next'
import { Input } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";

interface Props {}

const Register: NextPage<Props> = ({}) => {
    return (
		<div className="h-3/6 flex  justify-end items-center flex-col ">
			<h1 className="text-center text-teal-900 text-3xl font-bold p-10">Register</h1>
		<div
		  className=" flex  justify-center items-center 
	  "
		>
		  <form action=""  className="login-card card bg-slate-200 py-5 px-10 rounded-lg shadow-lg border  h-fit w-fit flex flex-col gap-5">
			<Input label="Full Name" required placeholder="Guillermo Rauch" />
			<Input label="Email" required  type="email" placeholder="Guillermo Rauch" />
			<Input label="Phone" required  placeholder="Guillermo Rauch" />
			<Input.Password required  label="Password" initialValue="" />
			<Input.Password required  label="Confirm your password" initialValue="" />
			<Button type="submit" color="primary" className="bg-teal-800" auto>
				Login
			</Button>
		  </form>
		</div>
		</div>
	  );
}

export default Register