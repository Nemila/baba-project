import { type Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const useLoadCall = (id: string) => {
  const client = useStreamVideoClient();

  const [call, setCall] = useState<Call | undefined>();
  const [callLoading, setCallLoading] = useState(true);

  useEffect(() => {
    const loadCall = async () => {
      setCallLoading(true);
      if (!client) return;

      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });

      if (calls.length > 0) {
        const call = calls[0];
        await call?.get();

        setCall(call);
      }

      setCallLoading(false);
    };

    loadCall().catch((err) => console.log(err));
  }, [client, id]);

  return { call, callLoading };
};

export default useLoadCall;
