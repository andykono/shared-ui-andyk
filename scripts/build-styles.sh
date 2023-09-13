#!/bin/bash

# Used to build styles for new style "LevelPlay"

# Colors
NOCOLOR='\033[0m'
GREEN='\033[0;32m'
LIGHTGREEN='\033[1;32m'
# ----------------------------------


echo -e "${LIGHTGREEN}== Start build common styles ${NOCOLOR}"

# compile common fusion.theme.scss
echo  -e "${GREEN}-- compile fonts ${NOCOLOR}"
sass dist/styles/scss/global.scss dist/styles/global.css -s compressed

echo -e "${LIGHTGREEN}== Done build common styles${NOCOLOR}"
