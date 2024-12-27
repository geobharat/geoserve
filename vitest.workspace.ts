import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
    "packages/**/src/**.test.ts",
])