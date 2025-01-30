"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        // Load the Lottie animation data
        fetch("https://assets8.lottiefiles.com/packages/lf20_kcsr6fcp.json")
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error("Error loading animation:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-[280px] sm:max-w-[400px] mb-4 sm:mb-8">
                {animationData && (
                    <Lottie animationData={animationData} loop={true} />
                )}
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center">
                Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 text-center max-w-[300px] sm:max-w-none">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
                onClick={() => router.push("/")}
                className="px-4 sm:px-6 py-2 text-sm sm:text-base"
            >
                Go Back Home
            </Button>
        </div>
    );
} 