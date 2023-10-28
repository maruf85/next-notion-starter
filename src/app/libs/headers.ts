export const headers: any = {
  Authorization: `Bearer ${process.env.NOTION_SECRET}`,
  'Notion-Version': process.env.NOTION_VERSION,
};
