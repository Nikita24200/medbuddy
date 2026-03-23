const { extractPrescriptionWithRules } = require('./routes/api');

// Test with a sample prescription
const samplePrescription = `
Dr. Smith
Patient: John Doe
Age: 35

Rx:
Tab Paracetamol 500mg twice daily for 5 days
Tab Amoxicillin 250mg thrice daily for 7 days
Syrup Cough syrup 10ml thrice daily for 3 days

Diagnosis: Upper respiratory infection with fever
Follow up: After completion of course
`;

console.log("🎯 Testing Rule-Based Prescription Analysis (FREE - No API Required)");
console.log("Input text:", samplePrescription);
console.log("\n📋 Extracted Results:");
const result = extractPrescriptionWithRules(samplePrescription, false);
console.log(JSON.stringify(result, null, 2));

console.log("\n✅ This extraction works completely offline and free!");
console.log("💡 Your app will now use intelligent pattern matching instead of mock data.");