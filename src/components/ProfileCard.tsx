import { profile } from '../data/profile';

export function ProfileCard() {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card p-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Location</p>
        <p className="mt-1 font-medium">{profile.location}</p>
      </div>
      <div className="card p-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Email</p>
        <a className="mt-1 font-medium text-brand" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div className="card p-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Looking for</p>
        <p className="mt-1 font-medium">{profile.lookingFor}</p>
      </div>
    </div>
  );
}


