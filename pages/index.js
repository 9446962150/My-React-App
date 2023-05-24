import {useRouter} from "next/router";
import {useState} from "react";

export default function Home() {
	const [name, setName]=useState("");
	return (
	<div>
	<input 
	type="text" 
	onChange={(event)=> setName(event.target.value)}
	placeholder="Enter your name" />
	<h1>{
	name ?`Hello ${name}` :"I don't know your name"
	}</h1>
	 </div>
	 );
}
