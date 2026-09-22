#!/bin/bash
ROOT="$(cd "$(dirname "$0")" && pwd)"

# Start backend server in background
cd "$ROOT/backend" && npm run dev &
BACKEND_PID=$!

trap "kill $BACKEND_PID" EXIT

# Start frontend server (this will be the exposed port)
cd "$ROOT/frontend" && npm run dev
