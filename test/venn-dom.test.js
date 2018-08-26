import test from 'ava'
import venn from '../src/venn-dom'

// test preparation code
document.body.innerHTML = `
  <span class='base'></span>
  <span class='compare'></span>
  <span class='compare'></span>
`

const base = document.querySelector('.base')
const compare = document.querySelector('.compare')
const compareList = document.querySelectorAll('.compare')
const compareCollection = document.getElementsByClassName('compare')
const compareArray = [compare, compare]

// tests
test('returns boolean when comparing two elements', t => {
  t.is(typeof venn(base, compare), 'boolean')
})

test('returns array of booleans comparing with node list', t => {
  t.is(Array.isArray(venn(base, compareList)), true)
  t.is(typeof venn(base, compareList)[0], 'boolean')
  t.is(typeof venn(base, compareList)[1], 'boolean')
})

test('returns array of booleans comparing with html collection', t => {
    t.is(Array.isArray(venn(base, compareCollection)), true)
    t.is(typeof venn(base, compareCollection)[0], 'boolean')
    t.is(typeof venn(base, compareCollection)[1], 'boolean')
})

test('returns array of booleans comparing with array of elements', t => {
    t.is(Array.isArray(venn(base, compareArray)), true)
    t.is(typeof venn(base, compareArray)[0], 'boolean')
    t.is(typeof venn(base, compareArray)[1], 'boolean')
})
