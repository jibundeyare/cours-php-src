#!/bin/bash

source_directories="code exos"

for source_directory in $source_directories
do
	target="${source_directory}.html"
	sources=$(find $source_directory -name "*.php" | sed "s/^$source_directory\//    - /" | sort)

	echo "---" > $target
	echo "layout: sources" >> $target
	echo "directory: $source_directory" >> $target
	echo "sources:" >> $target
	echo "$sources" >> $target
	echo "---" >> $target
done

