import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';
import Button from './components/button';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl">Home {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <Button />
    </main>
  );
}
