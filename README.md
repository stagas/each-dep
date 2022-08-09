<h1>
each-dep <a href="https://npmjs.org/package/each-dep"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-89-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/each-dep@1.0.0/dist/each-dep.min.js"><img src="https://img.shields.io/badge/brotli-698b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="EachDepOptions$6" title="Interface" open><summary><span><a href="#EachDepOptions$6">#</a></span>  <code><strong>EachDepOptions</strong></code>    </summary>  <a href="src/each-dep.ts#L24">src/each-dep.ts#L24</a>  <ul>        <p>  <details id="cache$7" title="Property" ><summary><span><a href="#cache$7">#</a></span>  <code><strong>cache</strong></code>    </summary>  <a href="src/each-dep.ts#L25">src/each-dep.ts#L25</a>  <ul><p><span>Map</span>&lt;string, {<p>  <details id="ids$10" title="Property" ><summary><span><a href="#ids$10">#</a></span>  <code><strong>ids</strong></code>    </summary>  <a href="src/each-dep.ts#L25">src/each-dep.ts#L25</a>  <ul><p>readonly     [  string, string  ]  []</p>        </ul></details><details id="source$9" title="Property" ><summary><span><a href="#source$9">#</a></span>  <code><strong>source</strong></code>    </summary>  <a href="src/each-dep.ts#L25">src/each-dep.ts#L25</a>  <ul><p>string</p>        </ul></details></p>}&gt;</p>        </ul></details><details id="external$11" title="Property" ><summary><span><a href="#external$11">#</a></span>  <code><strong>external</strong></code>    </summary>  <a href="src/each-dep.ts#L26">src/each-dep.ts#L26</a>  <ul><p>boolean</p>        </ul></details></p></ul></details><details id="eachDep$1" title="Function" open><summary><span><a href="#eachDep$1">#</a></span>  <code><strong>eachDep</strong></code><em>(inputFilename, options, seen)</em>    </summary>  <a href="src/each-dep.ts#L29">src/each-dep.ts#L29</a>  <ul>    <p>    <details id="inputFilename$3" title="Parameter" ><summary><span><a href="#inputFilename$3">#</a></span>  <code><strong>inputFilename</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="options$4" title="Parameter" ><summary><span><a href="#options$4">#</a></span>  <code><strong>options</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><a href="#EachDepOptions$6">EachDepOptions</a></p>        </ul></details><details id="seen$5" title="Parameter" ><summary><span><a href="#seen$5">#</a></span>  <code><strong>seen</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>    <ul><p><span>Set</span>&lt;string&gt;</p>        </ul></details>  <p><strong>eachDep</strong><em>(inputFilename, options, seen)</em>  &nbsp;=&gt;  <ul><span>AsyncGenerator</span>&lt;string, void, undefined&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-node](https://npmjs.org/package/everyday-node) by [stagas](https://github.com/stagas) &ndash; Everyday node utilities.
- [import-meta-resolve](https://npmjs.org/package/import-meta-resolve) by [Titus Wormer](https://wooorm.com) &ndash; Resolve things like Node.js — ponyfill for `import.meta.resolve`

## Contributing

[Fork](https://github.com/stagas/each-dep/fork) or [edit](https://github.dev/stagas/each-dep) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
