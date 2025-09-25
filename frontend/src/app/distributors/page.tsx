"use client";
import React from "react";
import axios from "axios";
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import TableDistributors from "../../../component/tableDistributors";

export default function Distributors() {
  const API_URL = process.env.API_URL || "http://localhost:8000";
  const [distributors, setDistributors] = React.useState<
    { id: number; name: string; city: string }[]
  >([]);
  const [selected, setSelected] = React.useState<null | {
    id: number;
    name: string;
    city: string;
    country?: string;
    email?: string;
    phone?: string;
  }>(null);

  const [formData, setFormData] = React.useState({
    id: 0,
    name: "",
    city: "",
    country: "",
    email: "",
    phone: "",
  });

  const [addNew, setAddNew] = React.useState(false);

  React.useEffect(() => {
    const fetchDistributorData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/distributors/index`);
        if (response.status === 200) {
          setDistributors(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDistributorData();
  }, []);

  const saveEdit = async () => {
    if (!selected) return;

    try {
      const response = await axios.post(
        `${API_URL}/api/distributors/update`,
        selected,
        { withCredentials: true }
      );

      console.log("Distributor updated:", response.data);
      setDistributors((prev) =>
        prev.map((item) =>
          item.id === selected.id ? { ...item, ...selected } : item
        )
      );
    } catch (error) {}
  };

  const saveAddNew = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/distributors/store`, {
        name: formData.name,
        city: formData.city,
        country: formData.country,
        email: formData.email,
        phone: formData.phone,
      });
      console.log("Distributor added:", response.data.data);
      setAddNew(false);
      setDistributors((prev) => [...prev, response.data.data]);
    } catch (error) {}
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="mx-20 py-20">
        <h2 className="text-2xl font-bold mb-2 text-amber-800">
          Coffee Valley
        </h2>
        <h3 className="text-xm font-bold mb-2 text-black">
          Taste the love in every cup
        </h3>
        <p className="text-sm text-gray-600">One Alewife Center 3rd Floor</p>
        <p className="text-sm text-gray-600">Cambridge, MA 02140</p>
      </div>
      <Navbar />
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center w-1/3 pt-6 mx-20">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setAddNew(true)}
          >
            Add
          </button>
        </div>
        <table className="mt-6 w-1/3 mx-20  border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">City</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {distributors.map((distributor) => (
              <TableDistributors
                key={distributor.id}
                name={distributor.name}
                city={distributor.city}
                onEdit={() => setSelected(distributor)}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selected && (
        <div className="mt-4 p-4 border rounded bg-gray-100 mx-20 w-1/3">
          <h2 className="font-bold mb-2">Edit Distributor</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Save:", selected);
              setSelected(null);
            }}
          >
            <div className="mb-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={selected.name || ""}
                onChange={(e) =>
                  setSelected({ ...selected, name: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                value={selected.city || ""}
                onChange={(e) =>
                  setSelected({ ...selected, city: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Region</label>
              <input
                type="text"
                value={selected.country || ""}
                onChange={(e) =>
                  setSelected({ ...selected, country: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="text"
                value={selected.email || ""}
                onChange={(e) =>
                  setSelected({ ...selected, email: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                value={selected.phone || ""}
                onChange={(e) =>
                  setSelected({ ...selected, phone: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={saveEdit}
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {addNew && (
        <div className="mt-4 p-4 border rounded bg-gray-100 mx-20 w-1/3">
          <h2 className="font-bold mb-2">Add New Distributor</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Save:", selected);
              setSelected(null);
            }}
          >
            <div className="mb-2">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Region</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border p-1 w-full"
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={saveAddNew}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setAddNew(false)}
                className="bg-gray-400 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
}
