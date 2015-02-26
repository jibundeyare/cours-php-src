#!/bin/bash

source_directories="code exos exam-201501 exam-201502"

for source_directory in $source_directories
do
	find $source_directory/ -name "*.php" -exec php -l {} \; | grep -v 'No syntax error'
done

