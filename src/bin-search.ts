#!/usr/bin/env node

import Promise = require('any-promise')
import columnify = require('columnify')
import { search } from 'typings-core'
import { loader } from './support/cli'

export function help () {
  console.log(`
typings search [query] [--ambient]

Options: [--name] [--source] [--offset] [--limit]
`)
}

export interface Options {
  name: string
  source: string
  offset: string
  limit: string
  ambient: boolean
  order: string
  sort: string
  verbose: boolean
}

export function exec (args: string[], options: Options): Promise<void> {
  const query = args[0]
  const { ambient, source, offset, limit, order, sort } = options

  return loader(search({ ambient, source, query, offset, limit, order, sort }), options)
    .then(function ({ results, total }) {
      if (total === 0) {
        console.log('No results found for search')
        return
      }

      console.log(`Viewing ${results.length} of ${total}`)
      console.log('')
      console.log(columnify(results))
    })
}
