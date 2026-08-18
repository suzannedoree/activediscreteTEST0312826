#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/preview-clean-section.sh [SECTION_XMLID]
# Default section is sec_graph_models.
SECTION_XMLID="${1:-sec_graph_models}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${SOURCE_DIR}"

echo "[1/3] Regenerating latex-image assets for ${SECTION_XMLID} (clean + force)"
pretext generate latex-image --target web --xmlid "${SECTION_XMLID}" --clean --force

echo "[2/3] Clean-building web output for ${SECTION_XMLID}"
pretext build web --clean --generate --xmlid "${SECTION_XMLID}"

echo "[3/3] Restarting preview server"
pretext view web --restart-server --no-launch

echo "Preview is ready. Open the section with a cache-busting URL, for example:"
echo "  http://127.0.0.1:8128/Doree-main/build/web/${SECTION_XMLID}.html?v=$(date +%s)"
