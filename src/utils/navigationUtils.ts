import { NavLink, SubMenuItem } from "@/src/data/links"

const normalizeHash = (hash?: string | null) =>
  hash ? hash.replace(/^#/, "") : ""

/**
 * Determines if a navigation link should be active based on current path and section
 */
export const isLinkActive = (
  link: NavLink,
  currentPath: string,
  activeSection: string
): boolean => {
  const normalizedActiveSection = normalizeHash(activeSection)

  // Check submenu items
  if (link.submenu) {
    const hasActiveSubmenuItem = link.submenu.some((item) => {
      const itemHashNormalized = normalizeHash(item.hash)

      // If submenu defines a hash → match page + normalized section
      if (item.hash) {
        if (item.url === currentPath && itemHashNormalized) {
          return itemHashNormalized === normalizedActiveSection
        }
        // also allow case when hash exists but activeSection not present:
        // if user navigated to /solutions#core the router might expose the hash differently;
        // so also fallback to checking location hash (handled elsewhere) or path match below
      }

      // No-hash submenu item: match by exact url
      if (item.url === currentPath) return true

      // Current path is a nested route of the submenu item (exclude root '/')
      if (item.url !== "/" && currentPath.startsWith(`${item.url}/`)) return true

      return false
    })

    if (hasActiveSubmenuItem) return true
  }

  // prevent root ('/') from being active while on other pages
  if (link.url === "/" && currentPath !== "/") return false

  // exact path match
  if (currentPath === link.url) return true

  // nested route (e.g., /solutions/web → /solutions active)
  if (link.url !== "/" && currentPath.startsWith(`${link.url}/`)) return true

  return false
}

/**
 * Determines if a submenu item should be active
 */
export const isSubmenuItemActive = (
  item: SubMenuItem,
  currentPath: string,
  activeSection: string
): boolean => {
  const normalizedActiveSection = normalizeHash(activeSection)
  const itemHashNormalized = normalizeHash(item.hash)

  // If item has a hash — require same page AND same normalized hash
  if (item.hash) {
    if (item.url === currentPath && itemHashNormalized) {
      return itemHashNormalized === normalizedActiveSection
    }
    // If URL matches but activeSection empty, still mark active (useful when router provides hash differently)
    if (item.url === currentPath && !normalizedActiveSection) {
      return true
    }
    return false
  }

  // No hash -> check exact url
  if (item.url === currentPath) return true

  // Nested route matching (exclude root '/')
  if (item.url !== "/" && currentPath.startsWith(`${item.url}/`)) return true

  return false
}
