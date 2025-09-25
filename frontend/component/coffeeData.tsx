type CoffeeDataProps = {
  beanType: string;
  salesPrice: number;
  description: string;
};

export default function CoffeeData({
  beanType,
  salesPrice,
  description,
}: CoffeeDataProps) {
  return (
    <div className="border p-4 mb-4 text-black bg-white rounded shadow">
      <label htmlFor="beanType" className="block text-lg font-bold ">
        Bean of the day
      </label>
      <h2 className="text-sm font-light mb-6">{beanType}</h2>
      <label htmlFor="salesPrice" className="block text-lg font-bold ">
        Sales Price
      </label>
      <p className="text-gray-600 mb-6">${salesPrice}</p>
      <label htmlFor="description" className="block text-lg font-bold ">
        Description
      </label>
      <p className="text-gray-600 mb-6">{description}</p>
    </div>
  );
}
