const { extractPrescriptionWithRules } = require('./routes/api');

// Test the rule-based extraction
const testText = `
Patient: John Doe
Age: 35

Prescription:
Tab Paracetamol 500mg twice daily for 5 days
Tab Amoxicillin 250mg thrice daily for 7 days
Syrup Cough syrup 10ml thrice daily for 3 days

Diagnosis: Upper respiratory infection
Follow up: After 7 days
`;

console.log("Testing rule-based extraction:");
const result = extractPrescriptionWithRules(testText, false);
console.log(JSON.stringify(result, null, 2));