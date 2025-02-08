import { useMemo } from "react";

const useCategory = () => {

  const categories = useMemo(() => ({
    nodejs: 'Node.js',
    javascript: 'JavaScript',
    html: 'HTML',
    css: 'CSS',
    express: 'Express',
    npm: 'NPM',
  }), []);

  const formatCategory = (category) => {
    return categories[category.toLowerCase()] || category;
  };

  const categoriesList = useMemo(() => {
    return Object.entries(categories).map(([key, value]) => {
      return { key, value }
    })
  }, [categories]);

  return {
    categories,
    formatCategory,
    categoriesList
  }
}

export default useCategory;