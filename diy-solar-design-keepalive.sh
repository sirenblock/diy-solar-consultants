#!/bin/bash

# Keep-Alive Script for Design Optimization Agents
# Window IDs: 18689 18691 18693 18695 18697 18699 18701 18703 18705 18708 18710 18712

WINDOW_IDS=(18689 18691 18693 18695 18697 18699 18701 18703 18705 18708 18710 18712)

echo "=== DIY Solar Design Keep-Alive Script ==="
echo "Monitoring ${#WINDOW_IDS[@]} Terminal windows"
echo "Press Ctrl+C to stop"
echo ""

while true; do
    for window_id in "${WINDOW_IDS[@]}"; do
        # Press Enter in each window to keep session alive
        osascript -e "tell application \"Terminal\" to do script \"\" in window id $window_id" 2>/dev/null
    done

    echo "$(date '+%H:%M:%S') - Keep-alive signal sent to ${#WINDOW_IDS[@]} windows"
    sleep 3
done
