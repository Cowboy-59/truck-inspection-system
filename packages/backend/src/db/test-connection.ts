import { testConnection } from './connection';

async function main() {
  console.log('Testing database connection...');
  
  const isConnected = await testConnection();
  
  if (isConnected) {
    console.log('✅ Database connection test passed');
    process.exit(0);
  } else {
    console.log('❌ Database connection test failed');
    console.log('Please check your DATABASE_URL in the .env file');
    process.exit(1);
  }
}

main().catch(console.error);