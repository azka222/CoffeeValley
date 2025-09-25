export default function Navbar() {
  return (
    <nav className="bg-red-900">
      <ul className="flex">
        {[
          "Home",
          "Catalog",
          "Order Status",
          "Distributors",
          "Upload",
        ].map((item) => (
          <li key={item} className="border-r border-white last:border-none">
            <a
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="block px-6 py-2 text-white hover:bg-red-700 transition"
            >
              {item}
            </a>
          </li>
        ))}
        <li>
            <a
             onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
             }}
              className="block px-6 py-2 text-white hover:bg-red-700 transition"
            >
              Logout
            </a>
        </li>
      </ul>
    </nav>
  );
}
