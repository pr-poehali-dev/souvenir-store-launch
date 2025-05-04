
import { useState } from 'react';
import { X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

export interface FilterState {
  search: string;
  priceRange: [number, number];
  categories: string[];
}

interface CatalogFilterProps {
  onFilterChange: (filters: FilterState) => void;
  initialFilters: FilterState;
  categories: { id: string; name: string }[];
  priceMin: number;
  priceMax: number;
}

const CatalogFilter = ({
  onFilterChange,
  initialFilters,
  categories,
  priceMin,
  priceMax,
}: CatalogFilterProps) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    const newFilters = { ...filters, categories: updatedCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      search: '',
      priceRange: [priceMin, priceMax],
      categories: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const filterContent = (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Поиск</h3>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Поиск сувениров..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-8"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Цена</h3>
          <div className="text-sm text-gray-500">
            {filters.priceRange[0]} ₽ — {filters.priceRange[1]} ₽
          </div>
        </div>
        <Slider
          defaultValue={[filters.priceRange[0], filters.priceRange[1]]}
          min={priceMin}
          max={priceMax}
          step={100}
          onValueChange={handlePriceChange}
          className="my-6"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Категории</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) => 
                  handleCategoryChange(category.id, checked as boolean)
                }
              />
              <Label
                htmlFor={`category-${category.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
        onClick={clearFilters}
      >
        <X size={16} />
        Сбросить фильтры
      </Button>
    </>
  );

  return (
    <>
      {/* Десктопные фильтры */}
      <div className="hidden md:block bg-white p-4 rounded-lg shadow-md">
        {filterContent}
      </div>

      {/* Мобильные фильтры */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          {showMobileFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
        </Button>
        
        {showMobileFilters && (
          <div className="mt-3 bg-white p-4 rounded-lg shadow-md">
            {filterContent}
          </div>
        )}
      </div>
    </>
  );
};

export default CatalogFilter;
