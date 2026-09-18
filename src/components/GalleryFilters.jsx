export default function GalleryFilters({ filters, activeFilters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {filters.map((filter) => (
        <select
          key={filter.key}
          value={activeFilters[filter.key]}
          onChange={(e) => onChange(filter.key, e.target.value)}
          className="bg-neutral-800 text-neutral-200 text-sm rounded-lg px-3 py-2 border border-neutral-700 focus:outline-none focus:border-neutral-500 capitalize"
        >
          <option value="todos">{filter.label}: Todos</option>
          {filter.options.map((option) => (
            <option key={option} value={option} className="capitalize">
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}