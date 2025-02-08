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
  return {
    categories,
    formatCategory
  }
}

export default useCategory;