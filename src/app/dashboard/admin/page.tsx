import DeleteDiseaseForm from "./_components/delete-disease-form";
import NewDiseaseForm from "./_components/new-disease-form";
import NewSpecialistForm from "./_components/new-specialist-form";
import { redirect } from "next/navigation";
import { checkRole } from "~/lib/utils";
import { SearchUsers } from "./_components/search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "~/actions/admin-actions";

const AdminDashboard = async (params: {
  searchParams: { search?: string };
}) => {
  if (!checkRole("admin")) redirect("/");

  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient.users.getUserList({ query })).data
    : [];

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2>Admin Dahboard</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <DeleteDiseaseForm />
        <NewSpecialistForm />
        <NewDiseaseForm />
      </div>

      <SearchUsers />

      {users.map((user) => {
        return (
          <div
            key={user.id}
            className="flex max-w-sm flex-col gap-4 rounded-md border p-4 shadow-sm"
          >
            <div>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>
                {
                  user.emailAddresses.find(
                    (email) => email.id === user.primaryEmailAddressId,
                  )?.emailAddress
                }
              </div>
              <div>{user.publicMetadata.role as string}</div>
            </div>
            <div className="flex gap-4">
              <div>
                <form action={setRole}>
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="admin" name="role" />
                  <button type="submit" className="btn">
                    Make Admin
                  </button>
                </form>
              </div>
              <div>
                <form action={setRole}>
                  <input type="hidden" value={user.id} name="id" />
                  <input type="hidden" value="specialist" name="role" />
                  <button type="submit" className="btn btn-ghost">
                    Make Specialist
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboard;
