"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0f]/80 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] blur-xl opacity-50 animate-pulse" />

                    {/* Spinner */}
                    <Loader2 className="w-12 h-12 text-white animate-spin relative z-10" />
                </div>

                <span className="text-gray-400 text-sm font-medium">Loading...</span>
            </div>
        </div>
    );
}