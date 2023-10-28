const apiUrl = process.env.NOTION_API_URL;

export const endpoints = {
  postsEndpoint: `${apiUrl}/${process.env.NOTION_DATABASE_ID}/query`,
};
