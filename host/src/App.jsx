import React, { Suspense, lazy, useState } from "react";

const RemoteButton = lazy(() => import("remote/Button"));

function App() {
	const [count, setCount] = useState(0);

	return (
		<div style={{ padding: "20px" }}>
			<h1>Host Application</h1>
			<p>Host counter: {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>
				Host Button (count: {count})
			</button>

			<div
				style={{ marginTop: "20px", padding: "20px", border: "2px solid blue" }}
			>
				<h2>Remote Component:</h2>
				<Suspense fallback={<div>Loading remote component...</div>}>
					<RemoteButton />
				</Suspense>
			</div>
		</div>
	);
}

export default App;
