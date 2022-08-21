<h1>
each-dep <a href="https://npmjs.org/package/each-dep"><img src="https://img.shields.io/badge/npm-v1.2.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-95-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/each-dep@1.2.0/dist/each-dep.min.js"><img src="https://img.shields.io/badge/brotli-1K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Async iterator walk of a file's dependencies.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i each-dep </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add each-dep </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add each-dep</code>
</td></tr></table>
</h4>

## API

<p>  <details id="EachDepOptions$6" title="Interface" open><summary><span><a href="#EachDepOptions$6">#</a></span>  <code><strong>EachDepOptions</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="alias$9" title="Property" ><summary><span><a href="#alias$9">#</a></span>  <code><strong>alias</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Record</span>&lt;string, string&gt;</p>        </ul></details><details id="cache$10" title="Property" ><summary><span><a href="#cache$10">#</a></span>  <code><strong>cache</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Map</span>&lt;string, {<p>  <details id="ids$13" title="Property" ><summary><span><a href="#ids$13">#</a></span>  <code><strong>ids</strong></code>    </summary>  <a href=""></a>  <ul><p>readonly     [  string, string  ]  []</p>        </ul></details><details id="source$12" title="Property" ><summary><span><a href="#source$12">#</a></span>  <code><strong>source</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details></p>}&gt;</p>        </ul></details><details id="entrySource$7" title="Property" ><summary><span><a href="#entrySource$7">#</a></span>  <code><strong>entrySource</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details><details id="external$8" title="Property" ><summary><span><a href="#external$8">#</a></span>  <code><strong>external</strong></code>    </summary>  <a href=""></a>  <ul><p>boolean</p>        </ul></details></p></ul></details><details id="eachDep$1" title="Function" open><summary><span><a href="#eachDep$1">#</a></span>  <code><strong>eachDep</strong></code><em>(entryFile, options, seen)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="entryFile$3" title="Parameter" ><summary><span><a href="#entryFile$3">#</a></span>  <code><strong>entryFile</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="options$4" title="Parameter" ><summary><span><a href="#options$4">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><a href="#EachDepOptions$6">EachDepOptions</a></p>        </ul></details><details id="seen$5" title="Parameter" ><summary><span><a href="#seen$5">#</a></span>  <code><strong>seen</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>    <ul><p><span>Set</span>&lt;string&gt;</p>        </ul></details>  <p><strong>eachDep</strong><em>(entryFile, options, seen)</em>  &nbsp;=&gt;  <ul><span>AsyncGenerator</span>&lt;string, void, undefined&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-node](https://npmjs.org/package/everyday-node) by [stagas](https://github.com/stagas) &ndash; Everyday node utilities.
- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities
- [import-meta-resolve](https://npmjs.org/package/import-meta-resolve) by [Titus Wormer](https://wooorm.com) &ndash; Resolve things like Node.js — ponyfill for `import.meta.resolve`

## Contributing

[Fork](https://github.com/stagas/each-dep/fork) or [edit](https://github.dev/stagas/each-dep) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
