type TableCatalogProps = {
  bean: string;
  sales_price: number;
  description: string;
};

export default function TableCatalog({
  bean,
  sales_price,
  description,
}: TableCatalogProps) {
  return (
    
     
        <tr>
          <td className="border border-gray-300 px-4 py-2">{bean}</td>
          <td className="border border-gray-300 px-4 py-2 text-amber-600 font-semibold">
            ${sales_price}
          </td>
          <td className="border border-gray-300 px-4 py-2">{description}</td>
        </tr>
  );
}
