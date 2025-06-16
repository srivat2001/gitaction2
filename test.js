const { add, fetchData } = require('./app');

async function runTests() {
  // Test the add function
  if (add(2, 3) !== 5) {
    console.error("❌ Add test failed");
    process.exit(1);
  }
  console.log("✅ Add test passed");

  // Test API response structure (not values)
  const post = await fetchData();

  const hasStructure =
    post &&
    typeof post === 'object' &&
    'userId' in post && typeof post.userId === 'number' &&
    'id' in post && typeof post.id === 'number' &&
    'title' in post && typeof post.title === 'string' &&
    'body' in post && typeof post.body === 'string';

  if (!hasStructure) {
    console.error("❌ API response structure test failed");
    process.exit(1);
  }

  console.log("✅ API response structure test passed");
}

runTests();
