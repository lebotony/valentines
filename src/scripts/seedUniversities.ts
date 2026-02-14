/**
 * Seed Script: Populate university_cache with initial university data
 *
 * Run this script to seed the database with all South African universities,
 * each with a random count between 1 and 20.
 *
 * SETUP: Place serviceAccountKey.json in project root
 * Get it from: Firebase Console → Project Settings → Service Accounts → Generate New Private Key
 */

import * as dotenv from "dotenv";
import * as admin from "firebase-admin";
import * as path from "path";
import * as fs from "fs";
import { UNIVERSITY_MAPPING } from "../utils/universityMapping";

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

/**
 * Generate random count between min and max (inclusive)
 */
const randomCount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Seed the university_cache collection
 */
const seedUniversities = async () => {
  console.log("🎓 Starting university seeding process...\n");

  try {
    let successCount = 0;
    let errorCount = 0;

    const universities = Object.entries(UNIVERSITY_MAPPING);

    for (const [key, info] of universities) {
      const count = randomCount(1, 20);

      try {
        const universityDocRef = db.collection("university_cache").doc(key);

        await universityDocRef.set({
          key: key,
          shortName: info.short,
          fullName: info.full,
          count: count
        });

        console.log(`✅ ${info.full.padEnd(55)} (${info.short.padEnd(8)}): ${count} people`);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to seed ${info.full}:`, error);
        errorCount++;
      }
    }

    console.log("\n" + "=".repeat(80));
    console.log(`✨ Seeding complete!`);
    console.log(`   Success: ${successCount} universities`);
    console.log(`   Errors: ${errorCount} universities`);
    console.log("=".repeat(80));

    process.exit(0);
  } catch (error) {
    console.error("\n💥 Fatal error during seeding:", error);
    process.exit(1);
  }
};

// Run the seeding function
seedUniversities();
