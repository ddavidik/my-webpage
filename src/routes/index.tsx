import { createFileRoute } from "@tanstack/react-router";

const LandingPage = () => {
	return (
		<main className="flex w-full h-screen items-center justify-center text-4xl bg-black text-white">
			Coming soon. \ (•◡•) /
		</main>
	);
};

export const Route = createFileRoute("/")({
	component: LandingPage
});
