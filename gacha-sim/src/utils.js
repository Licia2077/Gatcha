export function weightedPick(table) {
    // table: [{key, weight}]
    const total = table.reduce((s, t) => s + t.weight, 0)
    let r = Math.random() * total
    for (const t of table) {
        if ((r -= t.weight) <= 0) return t.key
    }
    return table[table.length - 1].key
}

export function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v))
}
