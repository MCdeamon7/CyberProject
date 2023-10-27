import TryHarder from "./TryHarder";
import QRcodeGenerator from "./QRcode/QRcode";
import { useSearchParams, Link } from "react-router-dom";

//import { axiosUser } from "../api/axios";
import { useEffect, useState } from "react";

import "../index.css";

function Home() {
	//const { auth } = useAuth();
	//const { user, setUser } = useUser();
	

	//setInfo(Descriptions.buildings.home);
	//console.log("info: ", info);

	useEffect(() => {
		//return a new user if non existant or the existin user data
		//createUser();
		//remove comment below for constant update
		//setInterval(updateUserInfo, 30000);
	})

	return (
		
		<>
			{/* {Object.keys(user).length === 0 ? ( */}
			{false ? (
				<TryHarder />
			) : (
				<section>
					<QRcodeGenerator />
					<p>
						<Link to="/tryharder">Fregato</Link>
					</p>
				</section>
			)}
		</>
	);
}

export default Home;
