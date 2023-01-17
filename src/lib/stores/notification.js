import { writable } from 'svelte/store'
import { generateID } from '$/utils/random'

export const notifications = writable([])

export default notifications

export function notify(message, type, duration = 3000) {
  const notification = {
    id: generateID(),
    message,
    type,
    duration,
    timeout: setTimeout(() => dismiss(notification), duration),
  }
  notifications.update((nn) => {
    pluck(nn, notification)
    splice(nn, notification)
    return nn
  })
}

export function success(message, duration = 3000) {
  return notify(message, 'success', duration)
}

export function error(message, duration = 3000) {
  return notify(message, 'error', duration)
}

export function info(message, duration = 3000) {
  return notify(message, 'info', duration)
}

export function dismiss(notification) {
  notifications.update((nn) => {
    remove(nn, notification)
    return nn
  })
}

function pluck(store, notification) {
  const index = getIndexById(store, notification)
  if (index === -1) {
    return
  }
  clearTimeout(store[index].timeout)
  remove(store, notification)
}

function splice(store, notification) {
  const index = getIndexById(store, notification)
  if (index === -1) {
    // push
    store.push(notification)
  } else {
    // replace
    store.splice(index, 1, notification)
  }
}

/**
 * @param {{id: string}[]} arr
 * @param {{ id: string }} item
 */
function getIndexById(arr, item) {
  return arr.findIndex((i) => i.id === item.id)
}

function remove(store, notification) {
  const index = getIndexById(store, notification)
  if (index == -1) {
    return
  }
  store.splice(index, 1)
}
