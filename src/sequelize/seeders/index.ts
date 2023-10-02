import Seeder from './seeder'

const flagIndex = 2
const args = process.argv.slice(flagIndex) // Remove the first two elements (node executable and script filename)

// Check for the presence of the up or down flags
const upFlagPresent = args.includes('--up')
const downFlagPresent = args.includes('--down')

if (upFlagPresent) {
  Seeder.up().then(() => {
    console.log('Populated database with base seed')
  })
} else if (downFlagPresent) {
  Seeder.down().then(() => {
    console.log('Cleaned database from base seed')
  })
} else {
  console.log('Flag is not present')
}
