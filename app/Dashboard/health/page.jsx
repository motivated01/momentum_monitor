import HealthView from './components/HealthView';
import { HealthProvider } from './context/Healthcontext';



/**
 * Replace this with a real fetch (DB call, API, etc.) for the signed-in
 * user's entry for today. Runs on the server, so it can read cookies,
 * hit a database, or call an internal API directly. Returning `null`
 * fields is fine — HealthProvider fills in sane defaults for anything
 * missing.
 */
async function getTodayHealthData() {
  // Example:
  // const session = await getServerSession();
  // const entry = await db.healthEntry.findFirst({ where: { userId: session.userId, date: today() } });
  // return entry ?? {};
  return {};
}

export default async function HealthPage() {
  const initialData = await getTodayHealthData();

  return (
    <HealthProvider initialData={initialData}>
      <HealthView />
    </HealthProvider>
  );
}