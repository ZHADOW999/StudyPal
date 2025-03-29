import { useState, useEffect } from "react";
import api from "@/api/api.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GenderType, UserRole } from "@/store/authStore";
import { useRouter } from "expo-router";

interface UserData {
  fullName: string;
  matricNumber: string;
  course: string;
  gender: GenderType | null;
  privacyPolicy: boolean;
  role: UserRole | null;
  // Add other user properties as needed
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
                setData(response.data);
            } catch (error: any) {
                if (error.response?.status === 401 && 
                    (error.response.data?.code === 'token_not_valid' || 
                     error.response.data?.detail === 'Token is blacklisted')) {
                    // Clear tokens and redirect to sign-up
                    await AsyncStorage.removeItem('authToken');
                    await AsyncStorage.removeItem('refreshToken');
                    router.replace('/sign-up/sign-up');
                } else {
                    setError(error.message || "An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};