type TableDistributorsProps = {
  name: string;
  city: string;
  onEdit: () => void; // ⬅️ tambahan callback
};

export default function TableDistributors({
  name,
  city,
  onEdit,
}: TableDistributorsProps) {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">{name}</td>
      <td className="border border-gray-300 px-4 py-2">{city}</td>
      <td className="border border-gray-300 px-4 py-2 text-blue-600 font-semibold cursor-pointer">
        <button className="hover:underline" onClick={onEdit}>
          Edit
        </button>
      </td>
    </tr>
  );
}
