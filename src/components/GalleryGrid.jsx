import { useMemo, useState } from "react";
import { galleryItems } from "../data/galleryItems";
import GalleryCard from "./GalleryCard";
import GalleryFilter from "./GalleryFilters";

export default function GalleryGrid() {
 // define aqui quais campos viram filtro
  const filters = useMemo(
    () => [
      {
        key: "type",
        label: "Tipo de trabalho",
        options: [...new Set(galleryItems.map((item) => item.type))],
      },
      {
        key: "archive_type",
        label: "Tipo de mídia",
        options: [...new Set(galleryItems.map((item) => item.archive_type))],
      },
    ],
    []
  );

  // estado inicial: "todos" para cada filtro definido acima
  const [activeFilters, setActiveFilters] = useState(
    Object.fromEntries(filters.map((f) => [f.key, "todos"]))
  );

  const handleFilterChange = (key, value) => {
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) =>
      filters.every(
        (filter) =>
          activeFilters[filter.key] === "todos" ||
          item[filter.key] === activeFilters[filter.key]
      )
    );
  }, [activeFilters, filters]);

  return (
    <div className="px-3">
      <GalleryFilter
        filters={filters}
        activeFilters={activeFilters}
        onChange={handleFilterChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-3">
        {filteredItems.map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}