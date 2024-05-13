import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center p-4">
      Loading
      <Loader2 className="ml-4 h-8 w-8 animate-spin" />
    </div>
  );
};

export default Loading;
