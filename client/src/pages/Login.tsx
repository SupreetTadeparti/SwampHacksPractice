import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Welcome Back {isAuthenticated && user?.name}
                    </h2>
                    {!isAuthenticated && <p className="mt-2 text-sm text-gray-600">
                        Please sign in to continue
                    </p>}
                </div>

                <button
                    onClick={() => isAuthenticated ? logout({ logoutParams: { returnTo: window.location.origin } }) : loginWithRedirect()}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 cursor-pointer"
                >
                    {isAuthenticated ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        </div>
    );
}