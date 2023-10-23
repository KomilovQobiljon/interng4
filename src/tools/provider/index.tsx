import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { ConfigProvider } from "antd";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";

import Store from "../../redux";

interface ProviderProps {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  children: React.ReactNode;
}

const ProviderConf: FC<ProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <AuthProvider
      authType="cookie"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <ConfigProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <Provider store={Store}>{children}</Provider>
          </QueryClientProvider>
        </ConfigProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default ProviderConf;
