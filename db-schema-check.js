const { Client } = require('pg');

const client = new Client({
  host: 'pgkanban.wxperts.com',
  user: 'TCI',
  password: 'Cowboy',
  database: 'TCIInspections',
  port: 5432,
});

async function checkSchema() {
  try {
    await client.connect();
    console.log('Connected to database successfully');

    // Get all tables
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `);
    
    console.log('\nTables in database:');
    tablesResult.rows.forEach(row => {
      console.log(`- ${row.table_name}`);
    });

    // Get detailed schema for each table
    for (const table of tablesResult.rows) {
      console.log(`\n\n=== ${table.table_name.toUpperCase()} TABLE ===`);
      
      const columnsResult = await client.query(`
        SELECT 
          column_name,
          data_type,
          is_nullable,
          column_default,
          character_maximum_length
        FROM information_schema.columns 
        WHERE table_name = $1 
        AND table_schema = 'public'
        ORDER BY ordinal_position;
      `, [table.table_name]);

      columnsResult.rows.forEach(col => {
        const nullable = col.is_nullable === 'YES' ? '(nullable)' : '(not null)';
        const length = col.character_maximum_length ? `(${col.character_maximum_length})` : '';
        const defaultVal = col.column_default ? ` DEFAULT ${col.column_default}` : '';
        console.log(`  ${col.column_name}: ${col.data_type}${length} ${nullable}${defaultVal}`);
      });
    }

  } catch (err) {
    console.error('Database connection error:', err.message);
  } finally {
    await client.end();
  }
}

checkSchema();