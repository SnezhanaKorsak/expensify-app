import { ScreenWrapper } from '../components/ScreenWrapper';

import { LogoBanner } from '../components/LogoBanner';
import { RecentTrips } from '../components/RecentTrips';

export function HomeScreen() {
  return (
    <ScreenWrapper>
      <LogoBanner />

      <RecentTrips />
    </ScreenWrapper>
  );
}
