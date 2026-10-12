import { Redirect } from 'expo-router';

export default function Index() {
  // Przekierowuje od razu na ekran logowania
  return <Redirect href="/login" />;
}