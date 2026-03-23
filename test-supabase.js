require('dotenv').config();
const supabase = require('./config/supabase');

async function testSupabase() {
  console.log("Testing Users table...");
  const { data: users, error: userErr } = await supabase.from('Users').select('*').limit(1);
  if (userErr) console.error("Users error:", userErr);
  else console.log("Users data:", users);

  console.log("Testing Prescriptions table...");
  const { data: rx, error: rxErr } = await supabase.from('Prescriptions').select('*').limit(1);
  if (rxErr) console.error("Prescriptions error:", rxErr);
  else console.log("Prescriptions data:", rx);
}

testSupabase();
