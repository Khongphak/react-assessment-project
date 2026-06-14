import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { registerUser } from "../../api/register";

export type Notification = {
  type: "success" | "error";
  message: string;
};

export function useRegisterMutation() {
  const [notification, setNotification] = useState<Notification | null>(null);

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (result) => {
      setNotification({ type: "success", message: result.message });
    },
    onError: (error) => {
      const message = isAxiosError(error)
        ? (error.response?.data as { message?: string })?.message ??
          "Something went wrong. Please try again."
        : "Could not reach the server. Please try again.";
      setNotification({ type: "error", message });
    },
  });

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), 5000);
    return () => clearTimeout(timer);
  }, [notification]);

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    notification,
  };
}
