import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage() {
  toast.error("This didn't work.");
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
