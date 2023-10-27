import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import TryHarder from "./components/TryHarder";

function App() {
	// const sock = io(env.RTM_URL, { transports: ['websocket'] });
	// sock.on('connect', () => {
	//     sock.emit('auth', env.RTM_AUTH_TOKEN);
	// })

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* public routes */}
					<Route path="/" element={<Home />} />
					<Route path="/tryharder" element={<TryHarder />} />
					<Route path="/" element={<Home />} />
					<Route path="/" element={<Home />} />
					

					{/* catch all */}
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
