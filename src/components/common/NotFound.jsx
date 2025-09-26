import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
            <p className="text-gray-400 mt-2">Oops! The page you are looking for doesn’t exist.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-2 text-blue-600 underline transition-colors"
            >
                Go Home
            </Link>
        </div>
    );
}
