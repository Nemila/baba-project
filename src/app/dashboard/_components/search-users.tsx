"use client";
import { usePathname, useRouter } from "next/navigation";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
        className="flex max-w-sm flex-col gap-4"
      >
        <label htmlFor="search">Search for Users</label>
        <input
          id="search"
          name="search"
          className="input input-bordered"
          type="text"
          placeholder="Recherchez un utilisateur"
        />
        <button type="submit" className="btn btn-outline">
          Submit
        </button>
      </form>
    </div>
  );
};
