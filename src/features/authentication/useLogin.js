import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as LoginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided Email or Password are incorrect");
    },
  });
  return { login, isLoading };
}
