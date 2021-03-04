ls [A-Z]*.md | gawk '{
print "- ["$0"]("$0")"}' > index.md
