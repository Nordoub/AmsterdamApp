import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootStack />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
