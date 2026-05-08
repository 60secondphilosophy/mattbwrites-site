const fs = require('fs');
const path = require('path');

// Simple RSS to JSON converter
const xmlFile = path.join(__dirname, '../../client/public/substack-feed.xml');
const jsonFile = path.join(__dirname, '../../client/public/substack-feed.json');

try {
  const xml = fs.readFileSync(xmlFile, 'utf-8');

  // Parse RSS items using regex (simple but effective for RSS)
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/);
    const descriptionMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/);
    const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

    if (titleMatch && linkMatch) {
      let description = descriptionMatch ? descriptionMatch[1] : '';
      // Strip HTML tags from description
      description = description.replace(/<[^>]*>/g, '').substring(0, 200).trim();

      items.push({
        id: linkMatch[1],
        title: titleMatch[1],
        description: description,
        link: linkMatch[1],
        pubDate: pubDateMatch ? pubDateMatch[1] : new Date().toISOString(),
      });
    }
  }

  // Write JSON file
  fs.writeFileSync(jsonFile, JSON.stringify({ posts: items }, null, 2));
  console.log(`✓ Converted ${items.length} posts to JSON`);
} catch (error) {
  console.error('Error converting RSS to JSON:', error);
  process.exit(1);
}
