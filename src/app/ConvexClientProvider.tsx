//クライアントサイドでレンダリング
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

// Convex backend との接続を維持
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!);

export default function ConvexClientProvider({
	children,
}:{
	children: React.ReactNode;
}) {
	return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}