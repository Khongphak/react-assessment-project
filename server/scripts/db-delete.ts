import db from "../db.js";

const id = process.argv[2];

if (!id) {
  console.error("Usage: npm run db:delete -- <id>");
  console.error("Example: npm run db:delete -- 1");
  process.exit(1);
}

const result = db.prepare("DELETE FROM registrations WHERE id = ?").run(id);

if (result.changes === 0) {
  console.log(`No record found for: ${id}`);
} else {
  console.log(`Deleted registration for: ${id}`);
}
