"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/AdminContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { posters as initialPosters, categories } from "@/lib/data";

export default function AdminPostersPage() {
  const { isAuthenticated } = useAdmin();
  const router = useRouter();
  const [posters, setPosters] = useState(initialPosters);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPoster, setEditingPoster] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "abstract",
    image: "",
    sizes: ["A4", "A3"],
    featured: false,
  });

  if (!isAuthenticated) {
    router.push("/admin");
    return null;
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this poster?")) {
      setPosters(posters.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    const poster = posters.find((p) => p.id === id);
    if (poster) {
      setFormData({
        title: poster.title,
        description: poster.description,
        price: poster.price.toString(),
        category: poster.category,
        image: poster.image,
        sizes: poster.sizes,
        featured: poster.featured,
      });
      setEditingPoster(id);
      setShowAddForm(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPoster) {
      setPosters(
        posters.map((p) =>
          p.id === editingPoster
            ? {
                ...p,
                title: formData.title,
                description: formData.description,
                price: parseFloat(formData.price),
                category: formData.category,
                image: formData.image,
                images: [formData.image],
                sizes: formData.sizes,
                featured: formData.featured,
              }
            : p
        )
      );
    } else {
      const newPoster = {
        id: (posters.length + 1).toString(),
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image: formData.image,
        images: [formData.image],
        sizes: formData.sizes,
        featured: formData.featured,
      };
      setPosters([...posters, newPoster]);
    }

    setShowAddForm(false);
    setEditingPoster(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "abstract",
      image: "",
      sizes: ["A4", "A3"],
      featured: false,
    });
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingPoster(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "abstract",
      image: "",
      sizes: ["A4", "A3"],
      featured: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Manage Posters</h1>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/admin")}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add New Poster
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {editingPoster ? "Edit Poster" : "Add New Poster"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Price *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Featured
                  </label>
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="w-5 h-5"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  {editingPoster ? "Update Poster" : "Add Poster"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-8 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posters.map((poster) => (
                <tr key={poster.id}>
                  <td className="px-6 py-4">
                    <div className="relative w-16 h-20 rounded overflow-hidden">
                      <Image
                        src={poster.image}
                        alt={poster.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {poster.title}
                  </td>
                  <td className="px-6 py-4 text-gray-600 capitalize">
                    {poster.category}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    ${poster.price}
                  </td>
                  <td className="px-6 py-4">
                    {poster.featured ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Yes
                      </span>
                    ) : (
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(poster.id)}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(poster.id)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
