import{S as d,i as f,s as m,w as p,x as v,y as g,K as x,f as M,t as w,z as y}from"../../../../../chunks/index-69c26055.js";import{c as L,a as S}from"../../../../../chunks/stores-4679e5fe.js";import{R as E}from"../../../../../chunks/Runner-4f2968fc.js";class O{constructor(n,t,e){this.id=n,this.x=t,this.y=e,this.canMove=!1,this.currentLocation=u(t,e),this.newLocation=""}moveToNewLocation(){[this.x,this.y]=D(this.newLocation),this.currentLocation=this.newLocation}}function u(r,n){return`${r},${n}`}function D(r){return r.split(",").map(n=>Number(n))}function $(r,n,t){return Array.from(Array(r),e=>Array(n).fill(t))}function N(r){return[[r.x,r.y+1],[r.x+1,r.y+1],[r.x+1,r.y],[r.x+1,r.y-1],[r.x,r.y-1],[r.x-1,r.y-1],[r.x-1,r.y],[r.x-1,r.y+1]].map(t=>u(t[0],t[1]))}class h{constructor(n){this.elfLocations=new Set,this.elves=[],this.addInitialElves(n),this.proposedMoves=new Set,this.proposedMoveDuplicates=new Set,this.directionCheckOrder=["N","S","W","E"]}addInitialElves(n){for(let t=0;t<n.length;t++)for(let e=0;e<n[0].length;e++)n[t][e]==="#"&&this.newElf(e,n.length-t-1)}newElf(n,t){const e=u(n,t);this.elfLocations.add(e),this.elves.push(new O(this.elves.length,n,t))}directionContainsElf(n,t){if(n==="N")return{containsElf:t[7]||t[0]||t[1],coordsIndex:0};if(n==="E")return{containsElf:t[1]||t[2]||t[3],coordsIndex:2};if(n==="S")return{containsElf:t[3]||t[4]||t[5],coordsIndex:4};if(n==="W")return{containsElf:t[5]||t[6]||t[7],coordsIndex:6};throw`Direction ${n} not recognised!`}considerMovesOneElf(n){const t=N(n),e=t.map(s=>this.elfLocations.has(s));if(!e.some(s=>s===!0)){n.canMove=!1,n.newLocation="NO_NEIGHBORS";return}for(const s of this.directionCheckOrder){const i=this.directionContainsElf(s,e);if(!i.containsElf){n.canMove=!0,n.newLocation=t[i.coordsIndex],this.proposedMoves.has(n.newLocation)?this.proposedMoveDuplicates.add(n.newLocation):this.proposedMoves.add(n.newLocation);return}}n.newLocation="FULL_NEIGHBORS",n.canMove=!1}considerMoves(){for(const n of this.elves)this.considerMovesOneElf(n)}performMoves(){let n=0;for(const t of this.elves.filter(e=>e.canMove))this.proposedMoveDuplicates.has(t.newLocation)||(this.elfLocations.delete(t.currentLocation),t.moveToNewLocation(),n++,this.elfLocations.add(t.currentLocation));return n}shiftPriorityDirection(){this.directionCheckOrder.push(this.directionCheckOrder.shift())}wipeElfMoveSets(){this.proposedMoves=new Set,this.proposedMoveDuplicates=new Set}moveElves(n,t){let e=n==="until end";e&&(n=1e6),this.sendDebuggingOutput("start",t);let s;for(s=1;s<=n;s++){this.considerMoves();const i=this.performMoves();if(this.shiftPriorityDirection(),this.wipeElfMoveSets(),this.sendDebuggingOutput(s,t),e&&i===0)return s}return s}sendDebuggingOutput(n,t){!t||t===void 0||t<1||(console.log(n),t>1&&(console.log(this.toString()),console.log(JSON.parse(JSON.stringify(this.elves)))))}getXYLimits(){const n=this.elves.map(s=>s.x),t=this.elves.map(s=>s.y),e={xMin:Math.min(...n),xMax:Math.max(...n),yMin:Math.min(...t),yMax:Math.max(...t)};return e.width=e.xMax-e.xMin+1,e.height=e.yMax-e.yMin+1,e}getFreeElfRectangleAmount(){const n=this.getXYLimits();return n.width*n.height-this.elves.length}toString(){const n=this.getXYLimits();let t=$(n.height,n.width,0);for(const o of this.elves)t[o.y-n.yMin][o.x-n.xMin]+=1;t=t.map(o=>o.map(a=>a===0?".":a===1?"#":a)),t=t.reverse();const e=[];for(let o=n.xMin;o<=n.xMax;o++)e.push(o.toString());const s=Math.max(...e.map(o=>o.length));t.unshift([" "]);for(let o=0;o<s;o++)t.unshift(new Array(t[0].length).fill(" "));for(let o=0;o<e.length;o++){const a=s-e[o].length;for(let c=s-1;c>=0;c--)t[c][o]=e[o][c-a]}let i=n.yMin;for(let o=t.length-1;o>t.length-1-n.height;o--)t[o].push(`  ${i}`),i++;return t.map(o=>o.join("")).join(`
`)}}function l(r){return r.trim().split(`
`)}function R(r){const e=new h(r);return e.moveElves(10,0),e.getFreeElfRectangleAmount()}function _(r){const n="until end";return new h(r).moveElves(n,0)}const C=`.#..###.##..##.####.#.....##.##.#..#.##.#..#.#.#.####..#####.#......#...#..\r
###...#.#..##...#.##...#.###.###....##..##..######.#.#..#.#...#.##...#.#.#.\r
.......#.###.....#.##.....##..#.#...##..#####.###.##......#.###.##.#####.##\r
##.##...##..####.##.........#.##.#.#..####.##....#.#####.####.####..##..##.\r
#..#.###...###...#..#..#..#.#.##.######.###..##########.#..#.##.#.#.##....#\r
.#..#..##..#.#.......#.#....#######..#.##.##..##.#.#.#..#.##....#..##.#####\r
.#.##..##.##...#.##.##..##.##.##..##...###..###.#...##..##....#.##....#####\r
.###.###.#.##.###....#..###..###..##.#.#.#.#....#####.###.######...###.###.\r
#...####.###.....#.....###...#..##.##...########.#.#.######...#..#.###....#\r
..###.#.###..#.#.........#....#.#.#####.#.#.#....###.##..###...####.#.#...#\r
###.#.######.##.#.##....##.##..##.#.#..#.#..##..#..##.###..##.########.#.#.\r
.#...##.....###...##..###.#.##.....#.##..#.#.#..##.#...#.#.#.###.#....#.##.\r
..####.#.#.###....###.#.....##...#.##.#...#..#.#..#####...######....#..##.#\r
.##.#..##.###.###..#.#.#####.#.###......###..#.#..#..###..###..#.....#..##.\r
#.#.#####..##.##...#...#...#..#...#.#.#..#........######.##.#...#..#.#..##.\r
.#.####....#.#..##.##..#...##.##...##.....###.###.###..#.#....#.#.####.#..#\r
##.#..#.###..###........#...##.#..##...####.##..#..#.##.#....##..##..#####.\r
...#..##.#..##.####..###...#.#.#.......#####..######....###..#.#..###.###..\r
.#.##...#.#.#........##..#.#####.#####...##......#.##.....#..####..#####...\r
.#.#..#..#.#.#.####.#...###.###.#..###...###.##..##...##..####.#.....#.#.##\r
##...#.#...##..##..##..##.####..######...##..#...##..##.##....##...#.#.....\r
..####.#####..##.####...#...#...#.#.#..##.##..#...###.#..#...#...#.#...#.##\r
..###.#....#.########...##....#..#.#.#..#.##..#...#.##.....#.###..#..#..#.#\r
#.##....###.#..##.#.##..####..###......####.###.##..###....#..#.#.#...####.\r
.######.#....#....#####...#..#..###.#..#...#.###.#.##..#.###..#..###......#\r
#..##.#.#####.#.#.##.#..###.#..#..#.#..#.#..#.#.....##########.#..#..#..#.#\r
###.##....#...####.###..##..#....#.#......#.#.#......#..##.#..####...#..#.#\r
..#.###..#.###.##.#..#....#..#####.#.#.####.#...#....#.##.#.#..###.########\r
..#.#.....##.##...#..##...#.#..##.####.###.#.#..#..####...#..##..##..#.###.\r
.###..#.###....#.####.#..#...###.#....#...#....###.#.######.####..#.#..###.\r
.#.##.##.....#.###.#...#..#.#.##.##..#.#..###.##..#.##....##....#.#...#.##.\r
#.##.#..#.#.#....##...####.#..#.###..######.###.#..##.#.#.#####...##..#.##.\r
#.###.##.#..#...#..##..#.##.....#...#....#...##....#..#..##..##.##....##.##\r
..###..#...#.#..##.##..#####.#..#.#..#...#...##.#.#..#..#.###....#.####.###\r
###.###...####..###..#..#.##..#.#.#.....#....#.#####.#..###.#..####....##.#\r
#.###.#.#.##.###.##.........###.#..#######.####..........#.#.###..#.#.##.#.\r
####.##.#####.##.#.#.##......#...#.#.##..###..#...#...###..###.#####..##...\r
.##...#####.##########.#....##.......#.#.#.#.###..#####....#..#.####..#####\r
####..#..####.###..###..#####.###....#.#.#.....#.####..#..###.#..##.##..##.\r
###.#.#....##..#.##.#.....##..##.##..##.###.##.#.#...####...#.##..####..##.\r
#..#..##.#....###..##.#..#...#.#.#.#.######.##..#...##.#.#.....####..##.##.\r
....####..###.#.##..#...#..##..#####.....##.##..#.##..##...#####.....##..#.\r
.##...##...######..##..#.##..##.#.#..##.##..###.#.####...#######..##....#..\r
.###.##.#......###....#####.#.#.##...#####..#..##.###...##...###.#.##...##.\r
.#....####..#..#..##...##....#.##...###..##.#..#.#.#.#.####.....###...#.###\r
##.###..#....##....#.##..#.#.....#...###..##..###....#.....###...##.....###\r
##......#.##.#.###...##..###.....#.##.#..#.###..###.#.##...#####..###..#.##\r
##.##.#####........#..##........#..##..##......#.###.#.#..##.######.#....##\r
##.....#.##...#.####.####...#.###.#....#.######.#....#.#.##....#...##..##.#\r
#.##.....#####.###.###.##.#.#.#..#....#.....#.#..###.####.#####...#.......#\r
...#######......###.##.#.#.#.....######.#.##.#.#...#..#.#....#.#.#.##..###.\r
#.###..#.##.#####..#.#...##.####.###.#####..#.....#...#.#..##.#.####.##.#..\r
.##..##...##....#####.#...####..#....#..##.#...#####.#.##...#.####.###...##\r
..####.###...##.##.#..#.###.##..#....#.#....###.#..##.#.....#.###....##.#..\r
#.##.#...#..##.####.######.##..#.#......#.###...#..##.#..##..###.#..#.#.#.#\r
..##.##..#..#.####.###.#...##.###.###.##..##.###....##...##.#..##.###...##.\r
.####..#....#####..#..##....#.#.##.#####.#####..#.....###.#..###.####......\r
##...#.#.#..##..##....##.###...#.##..#..#....###....#####.##..##.....####.#\r
#..####...####..##..#..#..#.#.....##.#..#####..#.#.###.#..###.....#.#.###.#\r
.##..####.####...#.#....##..#####..#...#...#..###..##......#...#..#.##.###.\r
#..##..###.###.#.#..##..#.#.###....##..##.###.#..#....#.#.#..#..##.#..####.\r
#.####..##....#...#.#...###..#..##...##.#.#.#.#...#..#...##...#...#.#....#.\r
#..###.###...###.#.###.#....#..##....#.#.#..#.##.###.#####..##.###...#.#...\r
.#..###.#.#..#.#.#...####.#.#.##.###.#..##.##.......#.#.#.#.#...#..#.#...##\r
######.....###...#..#..###.#.#...#...##..##.##.#..#.#...###.##.##....#.#...\r
#..##...#...##...###..#....#...###.#.###.###..#..##.##..####..#.###.##....#\r
..##...#..#.#.#######..#.###..#.#.#.#.##.#..#.....#.##.###.#####.#.######..\r
#.#.#..##.#.###.#....#..#..######.#....##.#..###.####.#......#..##.##.##.##\r
######....##......#..#...####..###..######.#.#.##....#...##.#.#..#.#.#.##..\r
###.####.###.#####.....######..#...#.##.#....##.#.##..#.#.##.#.##..###..###\r
..######....####..###..##..##.##...#.###..#.##..#.#...#.##.##.....#..#..###\r
.##..##..#.##....#...##.###.##..#...##..##.##.#.#..###...##....#.#.#..#...#\r
..#..##.########.##..#####.#....#..##.##.##.#...#.##..##.#..#..###...#.#.##\r
#.##....#..#.#..##.#......#.#..##.#.............#.##.#...##.#..#...##.#.###\r
#..#..###.#.##.#..#....##..#..#..##.##..#.##...###.......#..###..####...##.\r
\r
`,A=`....#..\r
..###.#\r
#...#.#\r
.#...##\r
#.###..\r
##.#.##\r
.#..#..\r
`;function T(r){let n,t;return n=new E({props:{part1:R,part2:_,preprocessor:l,metadata:k}}),{c(){p(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,s){g(n,e,s),t=!0},p:x,i(e){t||(M(n.$$.fragment,e),t=!0)},o(e){w(n.$$.fragment,e),t=!1},d(e){y(n,e)}}}const k={title:"Unstable Diffusion",day:"23",year:"2022",description:"The Elves need to plant some star fruit plants ASAP! How long will it take them to move out? This puzzle gave me serious undergrad C++ diffusion coursework vibes. (Except JS is slower)",longRuntime:!0,result1:"Number of empty spaces in square after 10 rounds",result2:"Number of rounds",keywords:["TODO: OPTIMISE","diffusion","simulation","object oriented"],visible:!0};function P(r){return L.set(l(C)),S.set(l(A)),[]}class Y extends d{constructor(n){super(),f(this,n,P,T,m,{})}}export{Y as default,k as myMetadata};
