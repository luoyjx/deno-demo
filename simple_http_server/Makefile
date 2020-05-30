dev:
	deno run --unstable --importmap=import_map.json --allow-net --reload server.ts

build:
	deno bundle --unstable --importmap=import_map.json server.ts server.js

install:
	deno install --unstable --importmap=import_map.json --allow-net --allow-read -n app server.ts