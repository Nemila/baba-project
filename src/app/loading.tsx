import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-1 items-center justify-center gap-2 p-4">
      <Loader2 className="h-6 w-6 animate-spin" />
      <p className="text-xl">Chargement</p>
    </div>
  );
};

export default Loading;
