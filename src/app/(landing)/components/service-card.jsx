export default function ServiceCard({ img, title, description, alt }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <img src={img} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </article>
  );
}
