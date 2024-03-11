"use client";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "../utilitycomponents/Loader/Loader";

const PrivateRoute = ({ children }: any) => {
    const { data: session, status } = useSession();
    const token = Cookies.get("token");
    const router = useRouter();
    if (status == "loading") {
        return <Loader />;
    } else {
        if (!session?.user || !token) {
            router.push("/login");
            return;
        }
        return <div>{children}</div>;
    }
};

export default PrivateRoute;
