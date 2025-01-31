const categoryMapper = {
  nodejs: 'Node.js',
  javascript: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  express: 'Express',
  npm: 'NPM',
};

export const formatCategory = (category) => {
  return categoryMapper[category.toLowerCase()] || category;
};
