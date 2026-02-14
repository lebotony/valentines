/**
 * Seed Script: Populate valentine_chart with initial country data
 *
 * Run this script to seed the database with 20 countries,
 * each with a random count between 1 and 30.
 *
 * SETUP: Place serviceAccountKey.json in project root
 * Get it from: Firebase Console → Project Settings → Service Accounts → Generate New Private Key
 */

import * as dotenv from "dotenv";
import * as admin from "firebase-admin";
import * as path from "path";
import * as fs from "fs";

// Load environment variables from .env file
dotenv.config();

// Path to service account key
const serviceAccountPath = path.join(__dirname, "../../serviceAccountKey.json");

// Check if service account key exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error("❌ Error: serviceAccountKey.json not found!");
  console.error("\nPlease follow these steps:");
  console.error("1. Go to Firebase Console → Project Settings");
  console.error("2. Navigate to 'Service accounts' tab");
  console.error("3. Click 'Generate new private key'");
  console.error("4. Save the file as 'serviceAccountKey.json' in project root");
  console.error("\nPath expected: " + serviceAccountPath);
  process.exit(1);
}

// Initialize Firebase Admin SDK
const serviceAccount = require(serviceAccountPath);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

// Country data to seed (19 countries - US/Canada share same code)
const SEED_COUNTRIES = [
  { code: "+1", name: "United States / Canada" },
  { code: "+44", name: "United Kingdom" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+39", name: "Italy" },
  { code: "+86", name: "China" },
  { code: "+81", name: "Japan" },
  { code: "+91", name: "India" },
  { code: "+55", name: "Brazil" },
  { code: "+61", name: "Australia" },
  { code: "+7", name: "Kazakhstan / Russia" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+27", name: "South Africa" },
  { code: "+52", name: "Mexico" },
  { code: "+41", name: "Switzerland" },
  { code: "+90", name: "Turkey" },
  { code: "+82", name: "South Korea" },
  { code: "+234", name: "Nigeria" },
  { code: "+263", name: "Zimbabwe" }
];

/**
 * Generate random count between min and max (inclusive)
 */
const randomCount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Seed the valentine_chart collection
 */
const seedCountries = async () => {
  console.log("🌍 Starting country seeding process...\n");

  try {
    let successCount = 0;
    let errorCount = 0;

    for (const country of SEED_COUNTRIES) {
      const count = randomCount(1, 30);

      try {
        const countryDocRef = db.collection("valentine_chart").doc(country.code);

        await countryDocRef.set({
          code: country.code,
          name: country.name,
          count: count
        });

        console.log(`✅ ${country.name.padEnd(30)} (${country.code.padEnd(5)}): ${count} people`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to seed ${country.name}:`, error);
        errorCount++;
      }
    }

    console.log("\n" + "=".repeat(60));
    console.log(`✨ Seeding complete!`);
    console.log(`   Success: ${successCount} countries`);
    console.log(`   Errors: ${errorCount} countries`);
    console.log("=".repeat(60));

    process.exit(0);
  } catch (error) {
    console.error("\n💥 Fatal error during seeding:", error);
    process.exit(1);
  }
};

// Run the seeding function
seedCountries();
