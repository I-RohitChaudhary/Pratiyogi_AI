/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:ZRHElA03pKzw@ep-shy-fog-a5za8oa1.us-east-2.aws.neon.tech/Ai-interview?sslmode=require',
    }
};