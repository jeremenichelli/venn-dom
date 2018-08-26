const compare = (baseRects, compareRects) => {
  return (
    compareRects.left >= baseRects.left - compareRects.width &&
    compareRects.left < baseRects.right + compareRects.width &&
    compareRects.top >= baseRects.top - compareRects.height &&
    compareRects.top < baseRects.bottom + compareRects.height
  )
}

const venn = (base, elements) => {
  const baseRects = base.getBoundingClientRect()

  // handle array as second argument
  if (Array.isArray(elements)) {
    return elements.map((el) => {
      if (!el) return false

      const compareRects = el.getBoundingClientRect()
      return compare(baseRects, compareRects)
    })
  }

  // handle HTMLCollection or NodeList as second argument
  if (elements instanceof NodeList || elements instanceof HTMLCollection) {
    const collection = [ ...elements ]

    return collection.map((el) => {
      // check for holly or null values
      if (!el) return false

      const compareRects = el.getBoundingClientRect()
      return compare(baseRects, compareRects)
    })
  }

  // assume element is node
  return compare(baseRects, elements.getBoundingClientRect())
}

export default venn
